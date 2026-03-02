import { useState } from 'react';
import { INDUSTRY_TEMPLATES, TONE_PROFILES } from '../utils/storyUtils.js';

const TONES = [
  { id: 'conversational', label: 'Conversational', desc: 'Warm, relatable, natural' },
  { id: 'professional', label: 'Professional', desc: 'Polished, credible, formal' },
  { id: 'inspirational', label: 'Inspirational', desc: 'Uplifting, possibility-driven' },
  { id: 'bold', label: 'Bold / Provocative', desc: 'Direct, punchy, unapologetic' },
  { id: 'humorous', label: 'Humorous', desc: 'Witty, self-aware, relatable' },
];

const FIELD_GUIDANCE = {
  brandName: {
    description: 'The name your audience knows you by. Use your customer-facing brand name, not your legal entity.',
    weak: 'XYZ Corp',
    strong: 'DreamHost',
    examples: ['DreamHost', 'Shopify', 'Mailchimp', 'FreshBooks'],
    maxChars: 50,
  },
  hero: {
    description: 'Be SPECIFIC about who your customer is. Include their size, role, or defining characteristic. Generic heroes produce generic stories.',
    weak: 'businesses',
    strong: 'mid-size e-commerce brands with 5-20 employees doing $50K-$500K/month',
    examples: [
      'B2B SaaS founders with 50-200 customers struggling to scale',
      'solo freelance designers earning $60K-$100K who want to build an agency',
      'neighborhood restaurant owners competing against national chains',
    ],
    maxChars: 200,
  },
  struggle: {
    description: 'Name the SPECIFIC pain with numbers if possible. Vague struggles produce vague stories. The more concrete, the more your audience will nod along.',
    weak: 'having trouble growing',
    strong: '38% monthly churn rate because onboarding takes 14 days and most users never reach their "aha moment"',
    examples: [
      '71% cart abandonment rate and rising customer acquisition costs eating into margins',
      'spending 20+ hours/week on manual tasks that should be automated',
      'invisible on Google Maps with only 12 reviews while competitors have 300+',
    ],
    maxChars: 300,
  },
  transformation: {
    description: 'Describe the measurable OUTCOME, not the process. Include specific numbers, timeframes, or before/after comparisons.',
    weak: 'better results',
    strong: 'reduced time-to-value from 14 days to 3, cutting churn to 12% and growing MRR by 47%',
    examples: [
      'recovered $2.3M in abandoned cart revenue with a 22% recovery rate',
      'built a predictable pipeline generating 8-12 qualified leads per month',
      'ranked #1 for "best [type] near me" and grew from 12 to 180+ Google reviews',
    ],
    maxChars: 300,
  },
  yourRole: {
    description: 'Frame this as the ROLE you play in their story, not a feature list. You are the guide, not the hero.',
    weak: 'a software company',
    strong: 'the onboarding automation platform that turns signups into power users',
    examples: [
      'the hosting partner that handles the technical side so they can focus on their business',
      'the local visibility platform that helps independents outrank chains',
      'the authority-building platform that turns expertise into a client magnet',
    ],
    maxChars: 200,
  },
  proofPoint: {
    description: 'One powerful piece of evidence. Include a NUMBER. Social proof with specifics beats vague claims every time.',
    weak: 'Trusted by many customers',
    strong: '340+ SaaS companies onboarded, avg 26% churn reduction in first 90 days',
    examples: [
      '1.5 million websites trust DreamHost with a 97-day money-back guarantee',
      '1,200+ stores, avg 18% revenue increase within 30 days of install',
      '94% client retention rate with avg 3.2x increase in inbound inquiries',
    ],
    maxChars: 200,
  },
};

export default function InputForm({ onGenerate }) {
  const [inputs, setInputs] = useState({
    brandName: '', hero: '', struggle: '', transformation: '', yourRole: '', proofPoint: '', selectedTone: 'conversational', industry: '',
  });
  const [showGuidance, setShowGuidance] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const set = (field) => (e) => setInputs(prev => ({ ...prev, [field]: e.target.value }));
  const setTone = (id) => setInputs(prev => ({ ...prev, selectedTone: id }));

  const canGenerate = inputs.brandName && inputs.hero && inputs.struggle && inputs.transformation && inputs.yourRole && inputs.proofPoint;

  const loadTemplate = (key) => {
    if (!key) return;
    const template = INDUSTRY_TEMPLATES[key];
    if (template) {
      setInputs(prev => ({
        ...prev,
        ...template.example,
        industry: key,
      }));
      setSelectedTemplate(key);
    }
  };

  const clearAll = () => {
    setInputs({ brandName: '', hero: '', struggle: '', transformation: '', yourRole: '', proofPoint: '', selectedTone: 'conversational', industry: '' });
    setSelectedTemplate('');
  };

  const toggleGuidance = (field) => {
    setShowGuidance(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const fields = [
    { field: 'brandName', label: 'Brand / Product Name', placeholder: 'e.g. DreamHost' },
    { field: 'hero', label: 'The Hero (your customer)', placeholder: 'e.g. mid-size e-commerce brands with 5-20 employees', isTextarea: true },
    { field: 'struggle', label: 'Their Struggle / Before State', placeholder: 'e.g. 38% monthly churn because onboarding takes 14 days', isTextarea: true },
    { field: 'transformation', label: 'The Transformation / After State', placeholder: 'e.g. reduced churn to 12% and grew MRR by 47%', isTextarea: true },
    { field: 'yourRole', label: 'Your Role (the guide, not the hero)', placeholder: 'e.g. the onboarding platform that turns signups into power users', isTextarea: true },
    { field: 'proofPoint', label: 'Key Proof Point (include a number)', placeholder: 'e.g. 340+ companies onboarded, avg 26% churn reduction in 90 days' },
  ];

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-4 sm:p-6 flex flex-col gap-5">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-white font-semibold text-lg">Your Story Details</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={clearAll}
            className="text-xs px-3 py-1.5 rounded-lg border border-metal/40 text-galactic hover:text-white hover:border-coral transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Industry quick-start templates */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-cloudy flex items-center gap-2">
          Quick Start Template
          <span className="text-xs text-galactic font-normal">(loads a complete example for your industry)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {Object.entries(INDUSTRY_TEMPLATES).map(([key, tmpl]) => (
            <button
              key={key}
              onClick={() => loadTemplate(key)}
              className={`text-xs px-3 py-2 rounded-lg border text-left transition-colors ${
                selectedTemplate === key
                  ? 'border-turtle bg-turtle/10 text-turtle'
                  : 'border-metal/30 text-galactic hover:text-cloudy hover:border-metal/60'
              }`}
            >
              {tmpl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input fields */}
      {fields.map(({ field, label, placeholder, isTextarea }) => {
        const guidance = FIELD_GUIDANCE[field];
        const isExpanded = showGuidance[field];
        const charCount = inputs[field].length;
        const maxChars = guidance?.maxChars || 200;

        return (
          <div key={field} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-cloudy">{label}</label>
              <div className="flex items-center gap-2">
                {charCount > 0 && (
                  <span className={`text-xs ${charCount > maxChars ? 'text-coral' : 'text-galactic'}`}>
                    {charCount}/{maxChars}
                  </span>
                )}
                <button
                  onClick={() => toggleGuidance(field)}
                  className="text-xs text-azure hover:text-white transition-colors flex items-center gap-1"
                  aria-label={`Toggle guidance for ${label}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                  {isExpanded ? 'Hide tips' : 'Tips'}
                </button>
              </div>
            </div>

            {/* Guidance panel */}
            {isExpanded && guidance && (
              <div className="bg-midnight/80 border border-metal/20 rounded-lg p-3 mb-1 animate-fadeIn">
                <p className="text-xs text-cloudy mb-2">{guidance.description}</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-coral shrink-0 mt-0.5">Weak:</span>
                    <span className="text-xs text-galactic italic">"{guidance.weak}"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs text-turtle shrink-0 mt-0.5">Strong:</span>
                    <span className="text-xs text-cloudy italic">"{guidance.strong}"</span>
                  </div>
                </div>
                {guidance.examples && (
                  <div className="mt-2 pt-2 border-t border-metal/20">
                    <p className="text-xs text-galactic mb-1">More examples:</p>
                    <ul className="flex flex-col gap-1">
                      {guidance.examples.map((ex, i) => (
                        <li key={i} className="text-xs text-cloudy flex items-start gap-1.5">
                          <span className="text-metal mt-0.5 shrink-0">&bull;</span>
                          <button
                            onClick={() => setInputs(prev => ({ ...prev, [field]: ex }))}
                            className="text-left hover:text-azure transition-colors cursor-pointer"
                            title="Click to use this example"
                          >
                            {ex}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {isTextarea ? (
              <textarea
                value={inputs[field]}
                onChange={set(field)}
                placeholder={placeholder}
                rows={2}
                className="bg-midnight border border-metal/30 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss resize-y min-h-[60px]"
              />
            ) : (
              <input
                type="text"
                value={inputs[field]}
                onChange={set(field)}
                placeholder={placeholder}
                className="bg-midnight border border-metal/30 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
              />
            )}
          </div>
        );
      })}

      {/* Tone selector */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-cloudy">Tone</label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {TONES.map(({ id, label, desc }) => (
            <button
              key={id}
              onClick={() => setTone(id)}
              className={`flex flex-col gap-0.5 px-3 py-2.5 rounded-lg border text-left transition-colors text-sm ${
                inputs.selectedTone === id
                  ? 'border-azure bg-azure/10 text-azure'
                  : 'border-metal/30 text-galactic hover:text-cloudy hover:border-metal/60'
              }`}
            >
              <span className="font-medium text-xs sm:text-sm">{label}</span>
              <span className="text-xs opacity-70 hidden sm:block">{desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={() => canGenerate && onGenerate(inputs)}
        disabled={!canGenerate}
        className="mt-2 w-full py-3 rounded-lg bg-azure text-white font-semibold hover:bg-azure-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
      >
        Generate Story Frameworks
      </button>

      {!canGenerate && (
        <p className="text-xs text-galactic text-center -mt-2">
          Fill in all 6 fields above to generate your frameworks
        </p>
      )}
    </div>
  );
}
