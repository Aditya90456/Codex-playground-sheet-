/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './components/dashboard/Dashboard';
import { ProblemList } from './components/dsa/ProblemList';
import { Forum } from './components/forum/Forum';
import { Leaderboard } from './components/gamification/Leaderboard';
import { LandingPage } from './components/auth/LandingPage';

function AppContent() {
  const { user, loading, timedOut } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'problems' | 'forum' | 'leaderboard'>('dashboard');

  if (timedOut) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white p-6 text-center">
        <div className="max-w-md w-full space-y-6">
          <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mx-auto border border-red-500/20">
            <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Authentication Timeout</h1>
          <p className="text-zinc-400">
            The security module is taking longer than expected to load. This usually happens if the API key is incorrect or if a browser extension is blocking the request.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-indigo-600 rounded-full font-bold hover:bg-indigo-700 transition-colors"
            >
              Retry Connection
            </button>
            <p className="text-xs text-zinc-500">
              Ensure <code className="text-zinc-300">VITE_CLERK_PUBLISHABLE_KEY</code> is correctly set in your environment variables.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-6"></div>
        <div className="space-y-4 text-center">
          <p className="text-zinc-400 font-medium">Initializing Security...</p>
          <div className="pt-8">
            <button 
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              className="text-xs text-zinc-600 hover:text-zinc-400 underline transition-colors"
            >
              Reset Session & Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage />;
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'problems' && <ProblemList />}
      {activeTab === 'forum' && <Forum />}
      {activeTab === 'leaderboard' && <Leaderboard />}
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppContent />
        <Toaster position="top-right" />
      </ProgressProvider>
    </AuthProvider>
  );
}
