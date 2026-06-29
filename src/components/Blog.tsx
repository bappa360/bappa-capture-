import { useState, MouseEvent } from 'react';
import { Clock, Calendar, ArrowRight, X, BookOpen, ThumbsUp } from 'lucide-react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const handleToggleLike = (postId: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <section
      id="journal"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-500 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-neutral-400 mb-3 block">
            05 / LIGHT & INK JOURNAL
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight uppercase">
              The Journal
            </h2>
            <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase max-w-sm">
              Articles and reflections exploring high-end geometry, optics, and behind-the-scenes techniques.
            </p>
          </div>
          <div className="w-full h-[1px] bg-neutral-800 mt-8"></div>
        </div>

        {/* Blog Article Cards Grid */}
        <div id="journal-stories-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const isLiked = !!likedPosts[post.id];
            return (
              <article
                key={post.id}
                id={`journal-post-${post.id}`}
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col justify-between bg-neutral-900/10 border border-neutral-900 rounded-sm overflow-hidden hover:border-neutral-700 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Aspect Thumbnail */}
                  <div className="relative overflow-hidden aspect-video bg-neutral-950 border-b border-neutral-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-110 saturate-0 group-hover:scale-102 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[8px] tracking-widest text-neutral-300 rounded-xs uppercase">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8">
                    {/* Read timer metadata */}
                    <div className="flex items-center gap-4 font-mono text-[9px] text-neutral-500 uppercase mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-lg md:text-xl text-neutral-100 uppercase tracking-tight leading-snug group-hover:text-white mb-4">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="px-6 md:px-8 pb-6 md:pb-8 flex justify-between items-center border-t border-neutral-900/40 pt-4 mt-auto">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-neutral-300 group-hover:text-white flex items-center gap-1.5 transition-colors">
                    Read Story <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <button
                    id={`like-post-btn-${post.id}`}
                    onClick={(e) => handleToggleLike(post.id, e)}
                    className={`p-2 border rounded-full transition-all duration-300 ${
                      isLiked
                        ? 'bg-white text-black border-white'
                        : 'border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Immersive Reader Modal */}
      {selectedPost && (
        <div
          id="journal-reader-modal"
          className="fixed inset-0 bg-neutral-950/98 z-50 overflow-y-auto p-6 md:p-12 flex justify-center animate-fade-in"
        >
          <div className="max-w-3xl w-full flex flex-col gap-8 relative py-12">
            {/* Exit top-right sticky bar */}
            <button
              id="close-reader-modal-btn"
              onClick={() => setSelectedPost(null)}
              className="absolute top-0 right-0 p-3 border border-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white rounded-full transition-all cursor-pointer flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest"
            >
              <X className="w-4 h-4" /> Close
            </button>

            {/* Back Arrow */}
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-neutral-400" />
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-400">
                  {selectedPost.category} JOURNAL READING
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-2xl md:text-4xl text-white uppercase tracking-tight leading-tight">
                {selectedPost.title}
              </h2>
              {/* Metadata row */}
              <div className="flex items-center gap-6 font-mono text-[10px] text-neutral-500 uppercase border-b border-neutral-900 pb-6 mt-2">
                <span>PUBLISHED ON {selectedPost.date}</span>
                <span>•</span>
                <span>ESTIMATED {selectedPost.readTime}</span>
              </div>
            </div>

            {/* Cinematic Hero Header of the article */}
            <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-neutral-900">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-115 saturate-0"
              />
            </div>

            {/* Article Content Copy with luxury text styling */}
            <div className="prose prose-invert max-w-none text-neutral-300 font-sans text-sm md:text-base leading-relaxed space-y-6">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('Key elements') || paragraph.startsWith('My primary setups') || paragraph.startsWith('Here are the key principles')) {
                  return (
                    <p key={index} className="font-sans font-bold text-neutral-200 mt-6 tracking-wide">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={index} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Closing banner */}
            <div className="mt-12 p-8 bg-neutral-900/40 border border-neutral-900 rounded-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-sans font-bold text-sm text-white">Liked this journal piece?</span>
                <span className="font-sans text-xs text-neutral-400">Support bappa capture's independent monochrome theory.</span>
              </div>
              <button
                id={`like-post-modal-btn-${selectedPost.id}`}
                onClick={(e) => handleToggleLike(selectedPost.id, e)}
                className={`py-3 px-6 text-xs font-mono tracking-widest uppercase border rounded-xs transition-all duration-300 flex items-center gap-2 ${
                  likedPosts[selectedPost.id]
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-white border-neutral-800 hover:border-neutral-600'
                }`}
              >
                <ThumbsUp className="w-4 h-4" /> {likedPosts[selectedPost.id] ? 'Liked Article' : 'Like Article'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
