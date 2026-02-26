import { useState } from 'react';

export default function SocialAdapt({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="bg-midnight/60 border border-metal/20 rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-galactic uppercase tracking-wider">Social Adaptation (&le;280 chars)</p>
        <span className="text-xs text-galactic">{text.length} chars</span>
      </div>
      <p className="text-sm text-cloudy italic">{text}</p>
      <button
        onClick={handleCopy}
        className="self-start text-xs px-3 py-1.5 rounded-lg bg-azure/10 border border-azure/30 text-azure hover:bg-azure hover:text-white transition-colors"
      >
        {copied ? 'Copied!' : 'Copy for Social'}
      </button>
    </div>
  );
}
