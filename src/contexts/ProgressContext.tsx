import React, { createContext, useContext, useEffect, useState } from 'react';
import { collection, onSnapshot, doc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';

interface ProgressData {
  status: 'todo' | 'in_progress' | 'completed';
  notes?: string;
  code?: string;
  language?: string;
  lastPracticedAt?: string;
  timeSpentMinutes?: number;
  pattern?: string;
  difficulty?: string;
}

interface ProgressContextType {
  progress: Record<string, ProgressData>;
  updateProgress: (problemId: string, data: Partial<ProgressData>) => Promise<void>;
  loading: boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, ProgressData>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProgress({});
      setLoading(false);
      return;
    }

    const progressRef = collection(db, 'users', user.uid, 'progress');
    const unsubscribe = onSnapshot(progressRef, (snapshot) => {
      const newProgress: Record<string, ProgressData> = {};
      snapshot.forEach((doc) => {
        newProgress[doc.id] = doc.data() as ProgressData;
      });
      setProgress(newProgress);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const updateProgress = async (problemId: string, data: Partial<ProgressData>) => {
    if (!user) return;

    const docRef = doc(db, 'users', user.uid, 'progress', problemId);
    const existing = progress[problemId];

    const updatedData = {
      ...data,
      problemId,
      lastPracticedAt: new Date().toISOString(),
    };

    if (!existing) {
      await setDoc(docRef, {
        ...updatedData,
        status: data.status || 'todo',
        timeSpentMinutes: data.timeSpentMinutes || 0,
      });
    } else {
      await updateDoc(docRef, updatedData);
    }

    // Award points if problem set to completed
    if (data.status === 'completed' && (!existing || existing.status !== 'completed')) {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, {
        points: increment(10)
      });
      
      // Update leaderboard
      const leaderboardRef = doc(db, 'leaderboard', user.uid);
      await setDoc(leaderboardRef, {
        displayName: user.displayName,
        photoURL: user.photoURL,
        points: increment(10)
      }, { merge: true });
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, loading }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
