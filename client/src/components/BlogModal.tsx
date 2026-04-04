import { X, Calendar, Clock, Globe } from "lucide-react";
import { createPortal } from "react-dom";

interface BlogPost {
  title: string;
  titleEs: string;
  excerpt: string;
  excerptEs: string;
  image: string;
  alt: string;
  date: string;
  readTime: string;
  category: string;
  categoryEs: string;
}

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

export default function BlogModal({ isOpen, onClose, post }: BlogModalProps) {
  if (!isOpen || !post) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-slate-900 rounded-xl shadow-2xl w-full max-w-3xl my-8 border border-slate-700/50">
        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={post.image}
            alt={post.alt}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="absolute bottom-4 left-6">
            <span className="inline-block bg-red-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* English */}
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-8">
            {post.excerpt}
          </p>

          {/* Spanish */}
          <div className="border-t border-slate-700 pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-pink-500" />
              <span className="text-sm font-semibold text-slate-200">En Español — {post.categoryEs}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
              {post.titleEs}
            </h3>
            <p className="text-slate-400 leading-relaxed text-base">
              {post.excerptEs}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
