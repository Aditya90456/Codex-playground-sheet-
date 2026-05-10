import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';

interface AuthContextType {
  user: any | null;
  profile: any | null;
  loading: boolean;
  signIn: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user: clerkUser, isLoaded } = useUser();
  const { openSignIn, signOut } = useClerk();
  const [profile, setProfile] = useState<any | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (clerkUser) {
      // Use LocalStorage for profile data instead of Firestore
      const storedPoints = localStorage.getItem(`points_${clerkUser.id}`) || '0';
      const storedBadges = localStorage.getItem(`badges_${clerkUser.id}`) || '[]';

      const userProfile = {
        uid: clerkUser.id,
        id: clerkUser.id,
        displayName: clerkUser.fullName || clerkUser.username || clerkUser.primaryEmailAddress?.emailAddress?.split('@')[0],
        email: clerkUser.primaryEmailAddress?.emailAddress,
        photoURL: clerkUser.imageUrl,
        points: parseInt(storedPoints),
        badges: JSON.parse(storedBadges),
        dailyGoalMinutes: 60,
        createdAt: clerkUser.createdAt ? new Date(clerkUser.createdAt).toISOString() : new Date().toISOString(),
      };
      setProfile(userProfile);
    } else {
      setProfile(null);
    }
  }, [clerkUser, isLoaded]);

  const signIn = async () => {
    try {
      openSignIn();
    } catch (error) {
      console.error("Auth error", error);
    }
  };

  const logout = async () => {
    await signOut();
  };

  const value = {
    user: clerkUser ? { ...clerkUser, uid: clerkUser.id } : null,
    profile,
    loading: !isLoaded,
    signIn,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
