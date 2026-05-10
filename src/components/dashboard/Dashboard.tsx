import React, { useMemo } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useProgress } from '../../contexts/ProgressContext';
import { PROBLEMS, DSA_PATTERNS } from '../../data/dsaData';
import { 
  Trophy, 
  Target, 
  Clock, 
  Flame,
  CheckCircle2,
  Circle,
  TrendingUp
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export function Dashboard() {
  const { profile } = useAuth();
  const { progress } = useProgress();

  const stats = useMemo(() => {
    const values = Object.values(progress);
    const completed = values.filter((p: any) => p.status === 'completed').length;
    const total = PROBLEMS.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    // Difficulty breakdown
    const byDiff = values.reduce((acc, p: any) => {
      if (p.status === 'completed' && p.difficulty) {
        acc[p.difficulty] = (acc[p.difficulty] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    // Weak areas (patterns with lowest completion)
    const patternStats = DSA_PATTERNS.map(pattern => {
      const patternProblems = PROBLEMS.filter(p => p.pattern === pattern);
      const done = values.filter((p: any) => p.pattern === pattern && p.status === 'completed').length;
      return { 
        name: pattern, 
        count: patternProblems.length, 
        done,
        percentage: patternProblems.length > 0 ? (done / patternProblems.length) * 100 : 100
      };
    }).filter(p => p.count > 0);

    const weakAreas = [...patternStats]
      .filter(p => p.percentage < 100)
      .sort((a, b) => a.percentage - b.percentage)
      .slice(0, 3);

    return { completed, total, percentage, byDiff, weakAreas };
  }, [progress]);

  const chartData = [
    { name: 'Easy', value: stats.byDiff['Easy'] || 0, color: '#22c55e' },
    { name: 'Medium', value: stats.byDiff['Medium'] || 0, color: '#f59e0b' },
    { name: 'Hard', value: stats.byDiff['Hard'] || 0, color: '#ef4444' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Welcome back, {profile?.displayName}!</h2>
          <p className="text-gray-500 mt-1">Here's your DSA progress at a glance.</p>
        </div>
        <div className="bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3">
          <Flame size={24} className="animate-pulse text-orange-300" />
          <span className="font-bold text-lg">7 Day Streak</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={CheckCircle2} 
          label="Problems Solved" 
          value={stats.completed.toString()} 
          subValue={`of ${stats.total}`} 
          color="bg-emerald-50 text-emerald-600"
        />
        <StatCard 
          icon={Trophy} 
          label="Points Earned" 
          value={profile?.points?.toString() || '0'} 
          subValue="XP" 
          color="bg-amber-50 text-amber-600"
        />
        <StatCard 
          icon={Target} 
          label="Completion" 
          value={`${stats.percentage}%`} 
          subValue="Overall" 
          color="bg-indigo-50 text-indigo-600"
        />
        <StatCard 
          icon={Clock} 
          label="Daily Goal" 
          value="45" 
          subValue="min / 60" 
          color="bg-rose-50 text-rose-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Target className="text-indigo-600" />
            Pattern Mastery Map
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {DSA_PATTERNS.map(pattern => {
              const patternProblems = PROBLEMS.filter(p => p.pattern === pattern);
              const done = Object.values(progress).filter((p: any) => p.pattern === pattern && p.status === 'completed').length;
              const percentage = patternProblems.length > 0 ? (done / patternProblems.length) * 100 : 0;
              
              return (
                <div key={pattern} className="flex flex-col items-center gap-3">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-100"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="34"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 34}
                        initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 34 * (1 - percentage / 100) }}
                        className="text-indigo-600"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-black">
                      {Math.round(percentage)}%
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center text-gray-500 line-clamp-2 h-8">
                    {pattern}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <TrendingUp className="text-indigo-600" />
              Difficulty Balance
            </h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
              <Target size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Recommended Focus</h3>
              <p className="text-sm text-rose-600 font-medium">Patterns that need more practice</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.weakAreas.length > 0 ? stats.weakAreas.map((area: any) => (
              <div key={area.name} className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 truncate">{area.name}</h4>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-gray-500">{area.done} / {area.count} Solved</span>
                  <span className="font-bold text-rose-600">{Math.round(area.percentage)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${area.percentage}%` }}
                    className="h-full bg-rose-500"
                  />
                </div>
              </div>
            )) : (
              <div className="col-span-3 text-center py-6 text-emerald-600 font-medium">
                Excellent! You have mastered all started patterns. Move to new ones!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, subValue, color }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm flex items-center gap-5 transition-transform hover:-translate-y-1">
      <div className={cn("p-4 rounded-2xl", color)}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="text-xs text-gray-400 font-medium">{subValue}</span>
        </div>
      </div>
    </div>
  );
}
