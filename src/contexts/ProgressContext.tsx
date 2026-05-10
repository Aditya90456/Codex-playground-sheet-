import React, { createContext, useContext, useEffect, useState } from 'react';
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

const STORAGE_KEY = 'dsa_tracker_progress';

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

    const savedProgress = localStorage.getItem(`${STORAGE_KEY}_${user.id}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      setProgress({});
    }
    setLoading(false);
  }, [user]);

  const updateProgress = async (problemId: string, data: Partial<ProgressData>) => {
    if (!user) return;

    setProgress(prev => {
      const existing = prev[problemId];
      const updatedData = {
        ...existing,
        ...data,
        problemId,
        lastPracticedAt: new Date().toISOString(),
      };
      
      const newProgress = {
        ...prev,
        [problemId]: {
          ...updatedData,
          status: data.status || existing?.status || 'todo',
          timeSpentMinutes: (existing?.timeSpentMinutes || 0) + (data.timeSpentMinutes || 0),
        } as ProgressData
      };

      localStorage.setItem(`${STORAGE_KEY}_${user.id}`, JSON.stringify(newProgress));

      // Award points logic (mocked)
      if (data.status === 'completed' && (!existing || existing.status !== 'completed')) {
        const currentPoints = Number(localStorage.getItem(`points_${user.id}`)) || 0;
        localStorage.setItem(`points_${user.id}`, String(currentPoints + 10));
      }

      return newProgress;
    });
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
