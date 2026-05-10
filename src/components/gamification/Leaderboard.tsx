import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Trophy, Medal, Star, Flame } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export function Leaderboard() {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'leaderboard'), orderBy('points', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEntries(docs);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block p-3 bg-amber-100 rounded-2xl mb-4">
          <Trophy size={40} className="text-amber-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Hall of Fame</h2>
        <p className="text-gray-500">Top performers on Codex Playground</p>
      </div>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          <motion.div 
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
              "bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between transition-transform hover:-translate-y-1",
              index < 3 && "border-amber-100 bg-amber-50/20 shadow-amber-100 ring-1 ring-amber-100"
            )}
          >
            <div className="flex items-center gap-6">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg",
                index === 0 ? "bg-amber-100 text-amber-600" :
                index === 1 ? "bg-slate-100 text-slate-600" :
                index === 2 ? "bg-orange-100 text-orange-600" :
                "bg-gray-50 text-gray-400"
              )}>
                {index < 3 ? <Medal size={24} /> : index + 1}
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={entry.photoURL || `https://ui-avatars.com/api/?name=${entry.displayName}`} 
                  alt="Avatar" 
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{entry.displayName}</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="text-xs text-gray-400 font-medium">Lvl {(Math.floor(entry.points / 100)) + 1}</span>
                     <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400" style={{ width: `${entry.points % 100}%` }}></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-2 justify-end text-amber-600">
                <Star size={18} fill="currentColor" />
                <span className="text-xl font-black">{entry.points}</span>
              </div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total XP</p>
            </div>
          </motion.div>
        ))}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            <p className="text-gray-400 text-sm font-medium">Syncing scores...</p>
          </div>
        )}
      </div>
    </div>
  );
}
