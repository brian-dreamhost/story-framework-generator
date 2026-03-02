import { useState } from 'react';
import SceneCard from './SceneCard.jsx';
import SocialAdapt from './SocialAdapt.jsx';
import StoryScore from './StoryScore.jsx';
import { readTime } from '../utils/storyUtils.js';

export default function FrameworkSection({ framework, index }) {
  const [isOpen, setIsOpen] = useState(index === 0);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('scenes');

  const wordCount = framework.narrative.trim().split(/\s+/).length;

  const handleCopy = () => {
    navigator.clipboard.writeText(framework.narrative);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const overallScore = framework.scores?.overall || 0;

  const getScoreColor = (s) => {
    if (s >= 80) return 'text-turtle';
    if (s >= 60) return 'text-azure';
    if (s >= 40) return 'text-tangerine';
    return 'text-coral';
  };

  const getScoreBg = (s) => {
    if (s >= 80) return 'bg-turtle/10 border-turtle/30';
    if (s >= 60) return 'bg-azure/10 border-azure/30';
    if (s >= 40) return 'bg-tangerine/10 border-tangerine/30';
    return 'bg-coral/10 border-coral/30';
  };

  const tabs = [
    { id: 'scenes', label: 'Scenes' },
    { id: 'narrative', label: 'Full Narrative' },
    { id: 'score', label: 'Score & Tips' },
    { id: 'social', label: 'Social Posts' },
  ];

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl overflow-hidden animate-fadeIn">
      {/* Header / Toggle */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-white/3 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-semibold text-sm sm:text-base">{framework.name}</h3>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded border ${getScoreBg(overallScore)} ${getScoreColor(overallScore)}`}>
              {overallScore}/100
            </span>
          </div>
          <p className="text-galactic text-xs mt-1 truncate">{framework.description}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-xs text-galactic hidden sm:block">{wordCount} words</span>
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
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col gap-4 border-t border-metal/10">
          {/* Tabs */}
          <div className="flex gap-1 mt-4 overflow-x-auto pb-1 -mx-1 px-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-azure/10 text-azure border border-azure/30'
                    : 'text-galactic hover:text-cloudy border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === 'scenes' && (
            <div className="animate-fadeIn">
              <div>
                {framework.scenes.map((scene, i) => (
                  <SceneCard key={i} beat={scene.beat} text={scene.text} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'narrative' && (
            <div className="animate-fadeIn">
              <div className="bg-midnight/60 border border-metal/20 rounded-xl p-4">
                <p className="text-sm text-cloudy leading-relaxed whitespace-pre-line">{framework.narrative}</p>
              </div>
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                <span className="text-xs text-galactic">{wordCount} words &middot; {readTime(framework.narrative)}</span>
                <button
                  onClick={handleCopy}
                  className="text-xs px-3 py-1.5 rounded-lg bg-azure/10 border border-azure/30 text-azure hover:bg-azure hover:text-white transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy Narrative'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'score' && (
            <div className="animate-fadeIn">
              <StoryScore scores={framework.scores} />
            </div>
          )}

          {activeTab === 'social' && (
            <div className="animate-fadeIn">
              <SocialAdapt socialAdaptations={framework.socialAdaptations} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
