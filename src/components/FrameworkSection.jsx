import { useState } from 'react';
import SceneCard from './SceneCard.jsx';
import SocialAdapt from './SocialAdapt.jsx';
import { adaptForSocial, readTime } from '../utils/storyUtils.js';

export default function FrameworkSection({ framework, index }) {
  const [isOpen, setIsOpen] = useState(index === 0); // First one open by default
  const [copied, setCopied] = useState(false);

  const wordCount = framework.narrative.trim().split(/\s+/).length;
  const social = adaptForSocial(framework.narrative);

  const handleCopy = () => {
    navigator.clipboard.writeText(framework.narrative);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl overflow-hidden animate-fadeIn">
      {/* Header / Toggle */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/3 transition-colors"
      >
        <div>
          <h3 className="text-white font-semibold text-base">{framework.name}</h3>
          <p className="text-galactic text-xs mt-1">{framework.description}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-xs text-galactic hidden sm:block">{wordCount} words · {readTime(framework.narrative)}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-5 h-5 text-galactic transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 flex flex-col gap-5 border-t border-metal/10">
          {/* Scene breakdown */}
          <div className="mt-4">
            <p className="text-xs text-galactic uppercase tracking-wider mb-2">Scene Breakdown</p>
            <div>
              {framework.scenes.map((scene, i) => (
                <SceneCard key={i} beat={scene.beat} text={scene.text} />
              ))}
            </div>
          </div>

          {/* Assembled narrative */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-galactic uppercase tracking-wider">Assembled Narrative</p>
              <span className="text-xs text-galactic sm:hidden">{wordCount} words · {readTime(framework.narrative)}</span>
            </div>
            <div className="bg-midnight/60 border border-metal/20 rounded-xl p-4">
              <p className="text-sm text-cloudy leading-relaxed">{framework.narrative}</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-galactic hidden sm:block">{wordCount} words · {readTime(framework.narrative)}</span>
              <button
                onClick={handleCopy}
                className="text-xs px-3 py-1.5 rounded-lg bg-azure/10 border border-azure/30 text-azure hover:bg-azure hover:text-white transition-colors"
              >
                {copied ? 'Copied!' : 'Copy Narrative'}
              </button>
            </div>
          </div>

          {/* Social adaptation */}
          <SocialAdapt text={social} />
        </div>
      )}
    </div>
  );
}
