import React, { ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx';
import './index.css';

// Early logging to catch boot issues
console.log("Main entry loading...");

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Key available:", !!PUBLISHABLE_KEY);

function MissingKeyUI() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 p-6 text-center text-white font-sans">
      <div className="max-w-md w-full space-y-8 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 shadow-2xl">
        <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center mx-auto border border-indigo-500/30">
          <svg className="w-10 h-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight">Setup Required</h1>
          <p className="text-zinc-400 leading-relaxed">
            Please add your <span className="text-indigo-400 font-semibold">Clerk Publishable Key</span> to the application environment.
          </p>
        </div>
        
        <div className="space-y-4 text-left">
          <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Environment Variable</p>
            <p className="text-indigo-400 font-mono text-sm break-all select-all focus:bg-indigo-500/10">VITE_CLERK_PUBLISHABLE_KEY</p>
          </div>
          <p className="text-xs text-zinc-500 text-center px-4">
            Add this in <span className="text-zinc-300">Settings &gt; Environment Variables</span> and the app will refresh.
          </p>
        </div>
        
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors text-sm"
        >
          I've added the key, refresh app
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  
  if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY.trim() === '' || PUBLISHABLE_KEY.startsWith('YOUR_') || !PUBLISHABLE_KEY.startsWith('pk_')) {
    root.render(<MissingKeyUI />);
  } else {
    root.render(
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    );
  }
} else {
  console.error("Fatal: Root element not found");
}
