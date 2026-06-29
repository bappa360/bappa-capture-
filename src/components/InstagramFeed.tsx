import { Heart, MessageCircle, Instagram } from 'lucide-react';

export default function InstagramFeed() {
  const feedItems = [
    {
      id: 'ig1',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      likes: '1.2k',
      comments: '42',
      tag: '#portraiture',
    },
    {
      id: 'ig2',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
      likes: '892',
      comments: '28',
      tag: '#parisfashion',
    },
    {
      id: 'ig3',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600',
      likes: '2.4k',
      comments: '86',
      tag: '#amalfiwedding',
    },
    {
      id: 'ig4',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=600',
      likes: '1.6k',
      comments: '53',
      tag: '#tokyostreet',
    },
    {
      id: 'ig5',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=600',
      likes: '3.1k',
      comments: '112',
      tag: '#wildserengeti',
    },
    {
      id: 'ig6',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=600',
      likes: '1.1k',
      comments: '19',
      tag: '#naturemonochrome',
    },
  ];

  return (
    <section
      id="instagram"
      className="py-16 bg-neutral-950 text-white border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <Instagram className="w-5 h-5 text-neutral-400" />
            <h3 className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-neutral-300">
              INSTAGRAM / @BAPPA_CAPTURE
            </h3>
          </div>
          <a
            id="follow-instagram-feed-btn"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            Follow Studio feed <span className="text-xs">→</span>
          </a>
        </div>

        {/* 6-Column Grid */}
        <div id="instagram-posts-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {feedItems.map((post) => (
            <a
              key={post.id}
              id={`instagram-post-card-${post.id}`}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square block bg-neutral-900 overflow-hidden border border-neutral-900 rounded-2xs"
            >
              <img
                src={post.image}
                alt={`Bappa Capture Instagram post ${post.tag}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale contrast-115 saturate-0 group-hover:scale-102 transition-transform duration-500"
              />

              {/* Hover metadata overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase mb-2">
                  {post.tag}
                </span>
                <div className="flex items-center gap-4 text-white text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-white text-white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-white" /> {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
