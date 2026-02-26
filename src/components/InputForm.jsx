import { useState } from 'react';

const TONES = [
  { id: 'conversational', label: 'Conversational', desc: 'Warm, relatable, natural' },
  { id: 'professional', label: 'Professional', desc: 'Polished, credible, formal' },
  { id: 'inspirational', label: 'Inspirational', desc: 'Uplifting, possibility-driven' },
  { id: 'bold', label: 'Bold', desc: 'Direct, punchy, unapologetic' },
];

const EXAMPLE = {
  brandName: 'DreamHost',
  hero: 'a small business owner juggling a dozen things at once',
  struggle: 'unreliable shared hosting — slow load times, mysterious downtime, zero support',
  transformation: 'a fast, professional website they\'re proud to share',
  yourRole: 'the hosting partner that handles the technical side so they can focus on their business',
  proofPoint: 'Trusted by 1.5 million websites, with a 97-day money-back guarantee',
  selectedTone: 'conversational',
};

export default function InputForm({ onGenerate }) {
  const [inputs, setInputs] = useState({
    brandName: '', hero: '', struggle: '', transformation: '', yourRole: '', proofPoint: '', selectedTone: 'conversational'
  });

  const set = (field) => (e) => setInputs(prev => ({ ...prev, [field]: e.target.value }));
  const setTone = (id) => setInputs(prev => ({ ...prev, selectedTone: id }));

  const canGenerate = inputs.brandName && inputs.hero && inputs.struggle && inputs.transformation && inputs.yourRole && inputs.proofPoint;

  const fields = [
    { field: 'brandName', label: 'Brand / Product Name', placeholder: 'e.g. DreamHost' },
    { field: 'hero', label: 'The Hero (your customer)', placeholder: 'e.g. a small business owner juggling a dozen things at once' },
    { field: 'struggle', label: 'Their Struggle / Before State', placeholder: 'e.g. unreliable hosting causing downtime and lost sales' },
    { field: 'transformation', label: 'The Transformation / After State', placeholder: 'e.g. a fast, professional website they\'re proud to share' },
    { field: 'yourRole', label: 'Your Role', placeholder: 'e.g. the hosting partner that handles the technical side' },
    { field: 'proofPoint', label: 'Key Proof Point', placeholder: 'e.g. Trusted by 1.5 million websites worldwide' },
  ];

  return (
    <div className="card-gradient border border-metal/20 rounded-2xl p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-lg">Your Story Details</h2>
        <button
          onClick={() => setInputs(EXAMPLE)}
          className="text-xs px-3 py-1.5 rounded-lg border border-metal/40 text-galactic hover:text-white hover:border-azure transition-colors"
        >
          Fill Example
        </button>
      </div>

      {fields.map(({ field, label, placeholder }) => (
        <div key={field} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-cloudy">{label}</label>
          <input
            type="text"
            value={inputs[field]}
            onChange={set(field)}
            placeholder={placeholder}
            className="bg-midnight border border-metal/30 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-galactic focus:outline-none focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
          />
        </div>
      ))}

      {/* Tone selector */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-cloudy">Tone</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
              <span className="font-medium">{label}</span>
              <span className="text-xs opacity-70">{desc}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => canGenerate && onGenerate(inputs)}
        disabled={!canGenerate}
        className="mt-2 w-full py-3 rounded-lg bg-azure text-white font-semibold hover:bg-azure-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus:ring-2 focus:ring-azure focus:ring-offset-2 focus:ring-offset-abyss"
      >
        Generate Story Frameworks
      </button>
    </div>
  );
}
