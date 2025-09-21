import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function ProjectModal({ isOpen, onClose, title, content }: ProjectModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl my-8 border border-slate-700/50">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50 sticky top-0 bg-slate-900 rounded-t-xl">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-400 hover:text-white" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-slate-300 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
