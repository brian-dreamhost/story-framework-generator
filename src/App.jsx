import { useState } from 'react'
import InputForm from './components/InputForm.jsx'
import FrameworkSection from './components/FrameworkSection.jsx'
import { generateStoryFrameworks } from './utils/storyUtils.js'

export default function App() {
  const [frameworks, setFrameworks] = useState([])

  const handleGenerate = (inputs) => {
    const results = generateStoryFrameworks(inputs)
    setFrameworks(results)
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <div className="bg-glow bg-grid min-h-screen">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Story Framework Generator</h1>
          <p className="text-cloudy text-lg max-w-2xl mx-auto">
            Turn your brand story into 5 proven narrative frameworks — from the Hero&apos;s Journey to the Pixar Story Spine. Enter your details once, get ready-to-use copy for your About page, case studies, and social posts.
          </p>
        </div>

        {/* Input form */}
        <InputForm onGenerate={handleGenerate} />

        {/* Generated frameworks */}
        {frameworks.length > 0 && (
          <div id="results" className="mt-10 flex flex-col gap-4">
            <h2 className="text-white font-semibold text-xl">Your 5 Story Frameworks</h2>
            {frameworks.map((fw, i) => (
              <FrameworkSection key={fw.id} framework={fw} index={i} />
            ))}
          </div>
        )}

        {/* How it works section (shown when no results) */}
        {frameworks.length === 0 && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: '5 Proven Frameworks', desc: 'Hero\'s Journey, PAS, BAB, Pixar Story Spine, and Customer Success Arc — all from one set of inputs.' },
              { title: 'Tone-Aware Copy', desc: 'Choose Conversational, Professional, Inspirational, or Bold to match your brand voice.' },
              { title: 'Social-Ready', desc: 'Every framework auto-generates a 280-char social version so you can post immediately.' },
            ].map(({ title, desc }) => (
              <div key={title} className="card-gradient border border-metal/20 rounded-xl p-5">
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-galactic text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
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
