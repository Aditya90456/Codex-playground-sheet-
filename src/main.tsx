import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Root() {
  if (!PUBLISHABLE_KEY) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-6 text-center">
        <div className="max-w-md w-full space-y-6">
          <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto border border-indigo-500/20">
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white">Clerk Configuration Required</h1>
          <p className="text-zinc-400">
            To enable authentication, please provide your <strong>Clerk Publishable Key</strong> in the application settings (Environment Variables).
          </p>
          <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl text-left font-mono text-sm">
            <p className="text-zinc-500 mb-1">Variable Name:</p>
            <p className="text-indigo-400">VITE_CLERK_PUBLISHABLE_KEY</p>
          </div>
          <p className="text-xs text-zinc-500">
            Once set, the application will automatically refresh.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
