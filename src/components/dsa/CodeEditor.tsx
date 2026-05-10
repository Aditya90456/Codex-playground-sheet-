import React, { useState, useEffect, useMemo } from 'react';
import Editor from '@monaco-editor/react';
import { useProgress } from '../../contexts/ProgressContext';
import { Problem, PROBLEMS } from '../../data/dsaData';
import { 
  Play, 
  Save, 
  Settings, 
  RotateCcw, 
  X,
  Maximize2,
  Minimize2,
  CheckCircle2,
  AlertCircle,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import toast from 'react-hot-toast';

interface CodeEditorProps {
  problem: Problem;
  onClose: () => void;
}

const DEFAULT_CODE = {
  cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nclass Solution {\npublic:\n    void solve() {\n        // Write your code here\n    }\n};`,
  python: `class Solution:\n    def solve(self):\n        # Write your code here\n        pass`,
  java: `import java.util.*;\n\npublic class Solution {\n    public void solve() {\n        // Write your code here\n    }\n}`
};

export function CodeEditor({ problem, onClose }: CodeEditorProps) {
  const { progress, updateProgress } = useProgress();
  const [language, setLanguage] = useState<'cpp' | 'python' | 'java'>('cpp');
  const [code, setCode] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<{ stdout: string; stderr: string; error?: string } | null>(null);
  const [activePanel, setActivePanel] = useState<'problem' | 'output' | 'snippets'>('problem');
  const [snippetFilter, setSnippetFilter] = useState<'all' | 'language' | 'pattern'>('all');

  const savedSnippets = useMemo(() => {
    const allProgress = progress as Record<string, any>;
    return Object.entries(allProgress)
      .filter(([_, data]) => data && data.code)
      .map(([id, data]) => ({
        id,
        ...data,
        problemTitle: PROBLEMS.find(p => p.id === id)?.title || 'Unknown Problem'
      }));
  }, [progress]);

  useEffect(() => {
    const existing = progress[problem.id];
    if (existing?.code) {
      setCode(existing.code);
      setLanguage((existing.language as any) || 'cpp');
    } else {
      setCode(DEFAULT_CODE[language]);
    }
  }, [problem.id, progress]);

  const handleLanguageChange = (newLang: string) => {
    const lang = newLang as 'cpp' | 'python' | 'java';
    setLanguage(lang);
    if (!progress[problem.id]?.code) {
      setCode(DEFAULT_CODE[lang]);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateProgress(problem.id, { 
        code, 
        language,
        status: progress[problem.id]?.status || 'in_progress'
      });
      toast.success('Solution saved successfully!');
    } catch (error) {
      toast.error('Failed to save solution');
    } finally {
      setIsSaving(false);
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    setActivePanel('output');
    setOutput({ stdout: 'Compiling and running...', stderr: '' });
    
    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: language === 'cpp' ? 'cpp' : language,
          version: language === 'cpp' ? '10.2.0' : language === 'python' ? '3.10.0' : '15.0.2',
          files: [{ content: code }],
        }),
      });

      const data = await response.json();
      if (data.run) {
        setOutput({
          stdout: data.run.stdout,
          stderr: data.run.stderr,
          error: data.message
        });
      } else {
        setOutput({ stdout: '', stderr: data.message || 'Execution failed' });
      }
    } catch (error) {
      setOutput({ stdout: '', stderr: 'Network error: Failed to connect to execution engine' });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-50 bg-neutral-950 flex flex-col font-sans"
    >
      {/* Header */}
      <header className="h-16 border-b border-neutral-800 flex items-center justify-between px-6 bg-neutral-900 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-400 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="h-6 w-[1px] bg-neutral-800" />
          <div>
            <h2 className="text-sm font-bold text-neutral-200">{problem.title}</h2>
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">{problem.pattern}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-neutral-800 border-none text-neutral-200 text-xs font-bold rounded-lg px-3 py-1.5 focus:ring-1 focus:ring-indigo-500 outline-none cursor-pointer"
          >
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>

          <button 
            onClick={() => setCode(DEFAULT_CODE[language])}
            className="p-2 hover:bg-neutral-800 rounded-lg text-neutral-400"
            title="Reset to default"
          >
            <RotateCcw size={18} />
          </button>

          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={cn(
              "flex items-center gap-2 bg-neutral-800 text-neutral-200 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-neutral-700 transition-all active:scale-95",
              isSaving && "opacity-50 pointer-events-none"
            )}
          >
            <Save size={16} />
            {isSaving ? 'Saving...' : 'Save'}
          </button>

          <button 
            onClick={handleRun}
            disabled={isRunning}
            className={cn(
              "flex items-center gap-2 bg-indigo-600 text-white px-6 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-500/20 disabled:opacity-50",
              isRunning && "animate-pulse"
            )}
          >
            <Play size={16} />
            {isRunning ? 'Running...' : 'Run Result'}
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Problem Details / Output Panel Toggle */}
        <div className="w-1/3 border-r border-neutral-800 bg-neutral-900 flex flex-col hidden lg:flex">
          <div className="flex border-b border-neutral-800 shrink-0">
            <button 
              onClick={() => setActivePanel('problem')}
              className={cn(
                "flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-colors",
                activePanel === 'problem' ? "text-indigo-400 border-b-2 border-indigo-500" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              Description
            </button>
            <button 
              onClick={() => setActivePanel('snippets')}
              className={cn(
                "flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-colors",
                activePanel === 'snippets' ? "text-indigo-400 border-b-2 border-indigo-500" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              Snippets
            </button>
            <button 
              onClick={() => setActivePanel('output')}
              className={cn(
                "flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-colors",
                activePanel === 'output' ? "text-indigo-400 border-b-2 border-indigo-500" : "text-neutral-500 hover:text-neutral-300"
              )}
            >
              Console
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 bg-neutral-900/50">
            {activePanel === 'problem' ? (
              <div className="space-y-6">
                <div>
                  <span className={cn(
                    "text-[10px] uppercase font-black px-2 py-0.5 rounded-md",
                    problem.difficulty === 'Easy' ? "bg-emerald-500/10 text-emerald-400" :
                    problem.difficulty === 'Medium' ? "bg-amber-500/10 text-amber-400" :
                    "bg-rose-500/10 text-rose-400"
                  )}>
                    {problem.difficulty}
                  </span>
                  <h1 className="text-2xl font-black text-neutral-100 mt-4 leading-tight">{problem.title}</h1>
                </div>

                <div className="prose prose-invert prose-sm">
                  <p className="text-neutral-400 leading-relaxed text-sm">
                    Implement the solution for this pattern. You can write your logic in the editor and click "Run Result" to see the output.
                  </p>
                  <a 
                    href={problem.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors text-xs"
                  >
                    View Test Cases <Maximize2 size={12} />
                  </a>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 select-all">
                  <h4 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest mb-3">Sample Input</h4>
                  <pre className="text-xs text-neutral-400 font-mono">
                    {language === 'cpp' ? '// Example input execution...' : '# Example usage below...'}
                  </pre>
                </div>
              </div>
            ) : activePanel === 'snippets' ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Library</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSnippetFilter('all')}
                      className={cn("px-2 py-1 text-[8px] font-bold rounded uppercase", snippetFilter === 'all' ? "bg-indigo-600 text-white" : "text-neutral-500")}
                    >All</button>
                    <button 
                      onClick={() => setSnippetFilter('language')}
                      className={cn("px-2 py-1 text-[8px] font-bold rounded uppercase", snippetFilter === 'language' ? "bg-indigo-600 text-white" : "text-neutral-500")}
                    >Lang</button>
                  </div>
                </div>

                <div className="space-y-3">
                  {savedSnippets.length > 0 ? savedSnippets.map((snippet) => (
                    <button 
                      key={snippet.id}
                      onClick={() => {
                        setCode(snippet.code || '');
                        setLanguage(snippet.language as any || 'cpp');
                        toast.success('Snippet loaded');
                      }}
                      className="w-full text-left bg-neutral-950 p-4 rounded-xl border border-neutral-800 hover:border-indigo-500 transition-colors group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xs font-bold text-neutral-200 truncate pr-2 group-hover:text-indigo-400">{snippet.problemTitle}</h4>
                        <span className="text-[8px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded shrink-0">
                          {snippet.language}
                        </span>
                      </div>
                      <p className="text-[9px] text-neutral-500 font-medium uppercase tracking-tighter">{snippet.pattern}</p>
                    </button>
                  )) : (
                    <div className="text-center py-10 opacity-30">
                      <Save size={32} className="mx-auto mb-2" />
                      <p className="text-[10px] font-bold uppercase">No Snippets Saved Yet</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="font-mono text-sm space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      isRunning ? "bg-amber-500 animate-pulse" : (output?.stderr || output?.error ? "bg-rose-500" : output?.stdout ? "bg-emerald-500" : "bg-neutral-600")
                    )} />
                    <h3 className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">Execution Console</h3>
                  </div>
                  <button 
                    onClick={() => setOutput(null)}
                    className="text-[10px] font-black text-indigo-400 uppercase hover:text-indigo-300 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                
                {output ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {output.stdout && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-500/50">
                          <CheckCircle2 size={12} />
                          <p className="text-[10px] font-black uppercase tracking-widest">Standard Output</p>
                        </div>
                        <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 shadow-inner">
                          <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed">{output.stdout}</pre>
                        </div>
                      </div>
                    )}
                    
                    {(output.stderr || output.error) && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-rose-500/50">
                          <AlertCircle size={12} />
                          <p className="text-[10px] font-black uppercase tracking-widest">Runtime Error / Stderr</p>
                        </div>
                        <div className="bg-rose-950/20 p-4 rounded-xl border border-rose-500/30">
                          <pre className="text-rose-400 whitespace-pre-wrap text-xs leading-relaxed font-semibold">
                            {output.stderr || output.error}
                          </pre>
                        </div>
                        <p className="text-[10px] text-rose-500/60 italic px-1">
                          Check your logic and constraints. Common issues include index-out-of-bounds or infinite recursion.
                        </p>
                      </div>
                    )}

                    {!output.stdout && !output.stderr && !output.error && (
                      <div className="flex items-center gap-3 text-neutral-500 bg-neutral-950 py-4 px-6 rounded-xl border border-neutral-800">
                        <Terminal size={16} />
                        <p className="text-xs italic">Program finished successfully with no output.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-neutral-600 border-2 border-dashed border-neutral-800 rounded-3xl">
                    <Play size={40} className="mb-4 opacity-5" />
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Ready for Execution</p>
                    <p className="text-xs mt-2 opacity-30 text-center px-6">Click "Run Result" to compile and execute your code against the remote engine.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right: Code Editor */}
        <div className="flex-1 flex flex-col bg-neutral-950">
          <Editor
            height="100%"
            language={language === 'cpp' ? 'cpp' : language}
            value={code}
            onChange={(val) => setCode(val || '')}
            theme="vs-dark"
            loading={<div className="text-neutral-500 text-xs font-bold animate-pulse p-10">Initializing Editor Engine...</div>}
            options={{
              fontSize: 16,
              fontFamily: "'JetBrains Mono', monospace",
              minimap: { enabled: false },
              padding: { top: 24, bottom: 24 },
              scrollBeyondLastLine: false,
              lineNumbers: 'on',
              glyphMargin: false,
              folding: true,
              lineDecorationsWidth: 0,
              lineNumbersMinChars: 3,
              automaticLayout: true,
              cursorBlinking: 'smooth',
              cursorSmoothCaretAnimation: 'on',
              smoothScrolling: true,
              renderLineHighlight: 'all',
              tabSize: 4,
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="h-10 border-t border-neutral-800 bg-neutral-900 flex items-center justify-between px-6 shrink-0">
        <div className="flex gap-4">
          <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
            {language?.toUpperCase()} Runtime
          </span>
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", output?.stderr ? "bg-rose-500" : output?.stdout ? "bg-emerald-500" : "bg-neutral-700")} />
            <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest">
              Engine Status: {isRunning ? 'Executing' : 'IDLE'}
            </span>
          </div>
        </div>
        <div className="text-[10px] text-neutral-600 font-black italic">
          Powered by Codex Playground Execution Engine
        </div>
      </footer>
    </motion.div>
  );
}
