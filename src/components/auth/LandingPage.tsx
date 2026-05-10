import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogIn, Code2, Rocket, Trophy, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function LandingPage() {
  const { signIn } = useAuth();

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 text-center max-w-2xl"
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/20">
            <Code2 size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight">Codex Playground</h1>
        </div>
        
        <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
          Master DSA patterns, track your progress, and join a community of builders. 
          The ultimate platform for technical interview success.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Rocket, label: 'Pattern-wise Study', color: 'text-indigo-400' },
            { icon: Trophy, label: 'Earn Badges', color: 'text-amber-400' },
            { icon: Users, label: 'Join Community', color: 'text-emerald-400' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl"
            >
              <item.icon className={`mx-auto mb-2 ${item.color}`} size={24} />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <button 
          onClick={signIn}
          className="group relative flex items-center gap-3 mx-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all active:scale-95"
        >
          <LogIn size={24} />
          Sign in with Google
          <div className="absolute -inset-1 bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
        </button>

        <p className="mt-8 text-neutral-500 text-sm italic">
          Start your journey to Big Tech today.
        </p>
      </motion.div>
    </div>
  );
}
