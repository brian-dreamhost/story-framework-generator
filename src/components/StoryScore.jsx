import { useState } from 'react';

function ScoreRing({ score, size = 48, strokeWidth = 4 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (s) => {
    if (s >= 80) return '#00CAAA'; // turtle
    if (s >= 60) return '#0073EC'; // azure
    if (s >= 40) return '#F59D00'; // tangerine
    return '#FF4A48'; // coral
  };

  const color = getColor(score);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(67,79,88,0.3)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <span className="absolute text-xs font-bold" style={{ color }}>{score}</span>
    </div>
  );
}

function ScoreBar({ label, score, tips }) {
  const [showTips, setShowTips] = useState(false);

  const getColor = (s) => {
    if (s >= 80) return 'bg-turtle';
    if (s >= 60) return 'bg-azure';
    if (s >= 40) return 'bg-tangerine';
    return 'bg-coral';
  };

  const getTextColor = (s) => {
    if (s >= 80) return 'text-turtle';
    if (s >= 60) return 'text-azure';
    if (s >= 40) return 'text-tangerine';
    return 'text-coral';
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-cloudy">{label}</span>
        <span className={`text-xs font-semibold ${getTextColor(score)}`}>{score}/100</span>
      </div>
      <div className="h-1.5 bg-metal/20 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${getColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
      {tips.length > 0 && (
        <button
          onClick={() => setShowTips(!showTips)}
          className="text-xs text-azure hover:text-white transition-colors self-start flex items-center gap-1 mt-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          {showTips ? 'Hide suggestion' : `${tips.length} improvement tip${tips.length > 1 ? 's' : ''}`}
        </button>
      )}
      {showTips && tips.length > 0 && (
        <div className="bg-midnight/60 border border-metal/20 rounded-lg p-2.5 animate-fadeIn">
          {tips.map((tip, i) => (
            <p key={i} className="text-xs text-cloudy leading-relaxed flex items-start gap-1.5">
              <span className="text-tangerine mt-0.5 shrink-0">*</span>
              {tip}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StoryScore({ scores }) {
  if (!scores) return null;

  const dimensions = [
    { key: 'specificity', data: scores.specificity },
    { key: 'emotionalArc', data: scores.emotionalArc },
    { key: 'clarity', data: scores.clarity },
    { key: 'brandVoice', data: scores.brandVoice },
    { key: 'engagement', data: scores.engagement },
  ];

  const getGrade = (s) => {
    if (s >= 90) return { grade: 'A+', desc: 'Excellent — publish-ready' };
    if (s >= 80) return { grade: 'A', desc: 'Strong — minor tweaks needed' };
    if (s >= 70) return { grade: 'B+', desc: 'Good — a few improvements will make this shine' };
    if (s >= 60) return { grade: 'B', desc: 'Solid foundation — needs specifics' };
    if (s >= 50) return { grade: 'C+', desc: 'Average — add concrete details and stronger language' };
    if (s >= 40) return { grade: 'C', desc: 'Below average — needs substantial rework' };
    return { grade: 'D', desc: 'Weak — likely needs more specific inputs' };
  };

  const { grade, desc } = getGrade(scores.overall);

  return (
    <div className="bg-midnight/60 border border-metal/20 rounded-xl p-4">
      <div className="flex items-center gap-4 mb-4">
        <ScoreRing score={scores.overall} size={56} strokeWidth={5} />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">Story Score</span>
            <span className="text-xs font-bold px-1.5 py-0.5 rounded border border-metal/30 text-cloudy">{grade}</span>
          </div>
          <p className="text-xs text-galactic mt-0.5">{desc}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {dimensions.map(({ key, data }) => (
          <ScoreBar
            key={key}
            label={data.label}
            score={data.score}
            tips={data.tips}
          />
        ))}
      </div>
    </div>
  );
}
