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
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'problems' | 'forum' | 'leaderboard'>('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
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
