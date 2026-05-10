import React, { useState, useMemo } from 'react';
import { PROBLEMS, DSA_PATTERNS, Problem } from '../../data/dsaData';
import { useProgress } from '../../contexts/ProgressContext';
import { 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Circle, 
  FileText,
  Search,
  Filter,
  PlayCircle,
  Terminal
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { CodeEditor } from './CodeEditor';

export function ProblemList() {
  const [search, setSearch] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [expandedPatterns, setExpandedPatterns] = useState<Record<string, boolean>>({
    [DSA_PATTERNS[0]]: true
  });
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  
  const { progress, updateProgress } = useProgress();

  const togglePattern = (pattern: string) => {
    setExpandedPatterns(prev => ({
      ...prev,
      [pattern]: !prev[pattern]
    }));
  };

  const filteredProblems = useMemo(() => {
    return PROBLEMS.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchDiff = filterDifficulty === 'All' || p.difficulty === filterDifficulty;
      return matchSearch && matchDiff;
    });
  }, [search, filterDifficulty]);

  const groupedProblems = useMemo(() => {
    const groups: Record<string, typeof PROBLEMS> = {};
    DSA_PATTERNS.forEach(pattern => {
      groups[pattern] = filteredProblems.filter(p => p.pattern === pattern);
    });
    return groups;
  }, [filteredProblems]);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <Filter size={18} className="text-gray-400" />
          <select 
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
            className="bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 text-sm font-medium"
          >
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {DSA_PATTERNS.map((pattern) => {
          const patternProblems = groupedProblems[pattern] || [];
          if (patternProblems.length === 0) return null;

          const completedInPattern = patternProblems.filter(p => progress[p.id]?.status === 'completed').length;
          const isExpanded = expandedPatterns[pattern];

          return (
            <div key={pattern} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => togglePattern(pattern)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <ListIcon count={patternProblems.length} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-gray-900">{pattern}</h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {completedInPattern} / {patternProblems.length} COMPLETED
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-50"
                  >
                    <div className="divide-y divide-gray-50">
                      {patternProblems.map((problem) => (
                        <ProblemRow 
                          key={problem.id} 
                          problem={problem} 
                          status={progress[problem.id]?.status || 'todo'}
                          notes={progress[problem.id]?.notes || ''}
                          onUpdate={(data) => updateProgress(problem.id, { ...data, pattern, difficulty: problem.difficulty })}
                          onOpenEditor={() => setSelectedProblem(problem)}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProblem && (
          <CodeEditor 
            problem={selectedProblem} 
            onClose={() => setSelectedProblem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProblemRow({ problem, status, notes, onUpdate, onOpenEditor }: any) {
  const [showNotes, setShowNotes] = useState(false);
  const [localNotes, setLocalNotes] = useState(notes);

  const diffColors = {
    Easy: 'bg-emerald-50 text-emerald-600',
    Medium: 'bg-amber-50 text-amber-600',
    Hard: 'bg-rose-50 text-rose-600'
  };

  return (
    <div className={cn(
      "p-4 group hover:bg-indigo-50/30 transition-colors",
      status === 'completed' && "bg-emerald-50/10"
    )}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onUpdate({ status: status === 'completed' ? 'todo' : 'completed' })}
            className={cn(
              "shrink-0 transition-all",
              status === 'completed' ? "text-emerald-500" : "text-gray-300 hover:text-indigo-400"
            )}
          >
            {status === 'completed' ? <CheckCircle2 size={24} fill="currentColor" className="text-white bg-emerald-500 rounded-full" /> : <Circle size={24} />}
          </button>
          
          <div>
            <h4 className={cn("font-semibold text-gray-800", status === 'completed' && "line-through text-gray-400")}>
              {problem.title}
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <span className={cn("text-[10px] uppercase font-bold px-2 py-0.5 rounded-full", diffColors[problem.difficulty as keyof typeof diffColors])}>
                {problem.difficulty}
              </span>
              <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600 transition-colors">
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <button 
            onClick={() => setShowNotes(!showNotes)}
            className={cn("p-2 rounded-lg transition-colors", showNotes ? "bg-indigo-100 text-indigo-600" : "text-gray-400 hover:text-indigo-600")}
           >
             <FileText size={20} />
           </button>
           <button 
            onClick={onOpenEditor}
            className="p-2 text-gray-400 hover:text-indigo-600 transition-all active:scale-95"
            title="Open Playground"
           >
             <Terminal size={20} />
           </button>
        </div>
      </div>

      <AnimatePresence>
        {showNotes && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4"
          >
            <textarea 
              value={localNotes}
              onChange={(e) => setLocalNotes(e.target.value)}
              onBlur={() => onUpdate({ notes: localNotes })}
              placeholder="Add your approach notes here..."
              className="w-full bg-gray-50 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ListIcon({ count }: { count: number }) {
  return (
    <div className="relative">
      <code className="text-xs font-bold">{count}</code>
    </div>
  );
}
