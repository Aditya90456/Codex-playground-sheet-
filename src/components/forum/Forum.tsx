import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  MessageSquare, 
  ThumbsUp, 
  User as UserIcon,
  Plus,
  Send,
  Hash
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatDistanceToNow } from 'date-fns';

export function Forum() {
  const { user, profile } = useAuth();
  const [posts, setPosts] = useState<any[]>([
    {
      id: '1',
      title: 'How to master Binary Search?',
      content: 'I am struggling with the boundary conditions in binary search. Any tips?',
      category: 'General',
      authorName: 'Alex Rivera',
      authorPhoto: 'https://i.pravatar.cc/150?u=alex',
      upvotes: 12,
      createdAt: new Date(Date.now() - 3600000)
    },
    {
      id: '2',
      title: 'Google Interview Experience',
      content: 'Just finished my onsite. The questions were heavily skewed towards Graphs and DP.',
      category: 'Company-wise',
      authorName: 'Sarah Chen',
      authorPhoto: 'https://i.pravatar.cc/150?u=sarah',
      upvotes: 45,
      createdAt: new Date(Date.now() - 86400000)
    }
  ]);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'General' });

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newPost.title || !newPost.content) return;

    const post = {
      id: Math.random().toString(36).substr(2, 9),
      ...newPost,
      authorId: user.id || user.uid,
      authorName: profile?.displayName,
      authorPhoto: profile?.photoURL,
      upvotes: 0,
      createdAt: new Date(),
    };

    setPosts([post, ...posts]);
    setNewPost({ title: '', content: '', category: 'General' });
    setShowNewPost(false);
  };

  const handleUpvote = (postId: string) => {
    setPosts(posts.map(p => p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Community Forum</h2>
          <p className="text-gray-500">Discuss patterns, share tips, and learn together.</p>
        </div>
        <button 
          onClick={() => setShowNewPost(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
        >
          <Plus size={20} />
          New Post
        </button>
      </div>

      <AnimatePresence>
        {showNewPost && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-xl"
          >
            <form onSubmit={handleCreatePost} className="space-y-4">
              <input 
                type="text"
                placeholder="Post Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="w-full text-xl font-bold border-none bg-gray-50 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex items-center gap-3">
                <Hash size={18} className="text-gray-400" />
                <select 
                  value={newPost.category}
                  onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                  className="bg-gray-50 border-none rounded-lg text-sm font-medium py-2 pr-8"
                >
                  <option>General</option>
                  <option>Company-wise</option>
                  <option>Resources</option>
                  <option>Mock Interview</option>
                </select>
              </div>
              <textarea 
                placeholder="Share your thoughts..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="w-full min-h-[200px] bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 resize-none"
              />
              <div className="flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setShowNewPost(false)}
                  className="px-6 py-2 text-gray-500 font-medium hover:bg-gray-100 rounded-xl"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-2 rounded-xl font-bold"
                >
                  Post
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-6">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            layout
            className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-100 transition-colors"
          >
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1 group">
                <button 
                  onClick={() => handleUpvote(post.id)}
                  className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                >
                  <ThumbsUp size={20} fill={post.upvotes > 0 ? "currentColor" : "none"} />
                </button>
                <span className="text-sm font-bold text-gray-600 group-hover:text-indigo-600">
                  {post.upvotes}
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    • {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.authorPhoto || `https://ui-avatars.com/api/?name=${post.authorName}`} 
                      className="w-6 h-6 rounded-lg object-cover" 
                      alt="Avatar"
                    />
                    <span className="text-sm font-medium text-gray-700">{post.authorName}</span>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-indigo-600 transition-colors">
                    <MessageSquare size={18} />
                    Comments
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
