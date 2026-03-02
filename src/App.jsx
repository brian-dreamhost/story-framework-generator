import { useState } from 'react'
import InputForm from './components/InputForm.jsx'
import FrameworkSection from './components/FrameworkSection.jsx'
import { generateStoryFrameworks, exportAllFrameworks } from './utils/storyUtils.js'

export default function App() {
  const [frameworks, setFrameworks] = useState([])
  const [inputs, setInputs] = useState(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleGenerate = (formInputs) => {
    setInputs(formInputs)
    const results = generateStoryFrameworks(formInputs)
    setFrameworks(results)
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  const handleExportAll = () => {
    if (!frameworks.length || !inputs) return
    setIsExporting(true)

    const content = exportAllFrameworks(frameworks, inputs)
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `story-frameworks-${inputs.brandName.toLowerCase().replace(/\s+/g, '-')}.md`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setTimeout(() => setIsExporting(false), 1500)
  }

  const handleCopyAll = () => {
    if (!frameworks.length || !inputs) return
    const content = exportAllFrameworks(frameworks, inputs)
    navigator.clipboard.writeText(content)
    setIsExporting(true)
    setTimeout(() => setIsExporting(false), 1500)
  }

  // Compute average score across all frameworks
  const avgScore = frameworks.length
    ? Math.round(frameworks.reduce((sum, fw) => sum + (fw.scores?.overall || 0), 0) / frameworks.length)
    : 0

  const getScoreColor = (s) => {
    if (s >= 80) return 'text-turtle'
    if (s >= 60) return 'text-azure'
    if (s >= 40) return 'text-tangerine'
    return 'text-coral'
  }

  return (
    <div className="bg-glow bg-grid min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-galactic">
          <a href="https://seo-tools-tau.vercel.app/" className="text-azure hover:text-white transition-colors">Free Tools</a>
          <span className="mx-2 text-metal">/</span>
          <a href="https://seo-tools-tau.vercel.app/copywriting/" className="text-azure hover:text-white transition-colors">Copywriting Tools</a>
          <span className="mx-2 text-metal">/</span>
          <span className="text-cloudy">Story Framework Generator</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center border border-turtle text-turtle rounded-full px-4 py-2 text-sm font-medium mb-4">
            Free Copywriting Tool
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Story Framework Generator</h1>
          <p className="text-cloudy text-base sm:text-lg max-w-2xl mx-auto">
            Turn your brand story into 5 proven narrative frameworks with scoring, improvement tips, and platform-ready social posts. Enter your details once, get publish-ready copy for your About page, case studies, ads, and social media.
          </p>
        </div>

        {/* Input form */}
        <InputForm onGenerate={handleGenerate} />

        {/* Generated frameworks */}
        {frameworks.length > 0 && (
          <div id="results" className="mt-10 flex flex-col gap-4">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <h2 className="text-white font-semibold text-xl">Your 5 Story Frameworks</h2>
                <span className={`text-sm font-bold ${getScoreColor(avgScore)}`}>
                  Avg: {avgScore}/100
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyAll}
                  className="text-xs px-3 py-1.5 rounded-lg border border-metal/40 text-galactic hover:text-white hover:border-azure transition-colors flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                  </svg>
                  {isExporting ? 'Copied!' : 'Copy All'}
                </button>
                <button
                  onClick={handleExportAll}
                  className="text-xs px-3 py-1.5 rounded-lg bg-azure/10 border border-azure/30 text-azure hover:bg-azure hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Export All (Markdown)
                </button>
              </div>
            </div>

            {/* Score summary bar */}
            <div className="card-gradient border border-metal/20 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <p className="text-xs text-galactic uppercase tracking-wider shrink-0">Framework Scores</p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 flex-1">
                  {frameworks.map((fw) => {
                    const score = fw.scores?.overall || 0;
                    return (
                      <div key={fw.id} className="flex items-center gap-1.5">
                        <span className="text-xs text-galactic truncate max-w-[100px]">{fw.name.split('(')[0].trim()}</span>
                        <span className={`text-xs font-bold ${getScoreColor(score)}`}>{score}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Framework sections */}
            {frameworks.map((fw, i) => (
              <FrameworkSection key={fw.id} framework={fw} index={i} />
            ))}

            {/* Bottom export */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleExportAll}
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-azure text-white font-semibold hover:bg-azure-hover transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Export All Frameworks + Social Posts
              </button>
              <button
                onClick={handleCopyAll}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-metal/40 text-galactic hover:text-white hover:border-azure transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                </svg>
                Copy All to Clipboard
              </button>
            </div>
          </div>
        )}

        {/* How it works section (shown when no results) */}
        {frameworks.length === 0 && (
          <div className="mt-12">
            <h2 className="text-white font-semibold text-lg text-center mb-6">What You Get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: '5 Proven Frameworks',
                  desc: "Hero's Journey, PAS, BAB, Pixar Story Spine, and Customer Success Arc \u2014 each written differently, not just reformatted.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  ),
                },
                {
                  title: 'Story Scoring System',
                  desc: 'Each framework scored on Specificity, Emotional Arc, Clarity, Brand Voice, and Engagement \u2014 with actionable improvement tips.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  ),
                },
                {
                  title: '5 Distinct Tones',
                  desc: 'Conversational, Professional, Inspirational, Bold, and Humorous \u2014 each fundamentally rewrites the story, not just swaps words.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                  ),
                },
                {
                  title: '5 Social Platforms',
                  desc: 'Genuinely rewritten posts for X/Twitter, LinkedIn, Instagram, Facebook, and TikTok \u2014 not just truncated text.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                  ),
                },
                {
                  title: 'Industry Templates',
                  desc: '8 pre-loaded industry examples showing what GREAT inputs look like \u2014 SaaS, E-commerce, Local Business, and more.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                    </svg>
                  ),
                },
                {
                  title: 'Export Everything',
                  desc: 'Download all 5 frameworks + all social adaptations + scores as a single formatted Markdown file. Ready to share with your team.',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  ),
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="card-gradient border border-metal/20 rounded-xl p-5">
                  <div className="text-azure mb-2">{icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-galactic text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-metal/30 text-center text-sm text-galactic">
          Free marketing tools by{' '}
          <a href="https://www.dreamhost.com" target="_blank" rel="noopener" className="text-azure hover:text-white transition-colors">
            DreamHost
          </a>
        </footer>
      </div>
    </div>
  )
}
