import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,0,0,0.12),transparent),radial-gradient(1000px_500px_at_120%_10%,rgba(255,255,255,0.06),transparent)]" />

      <Navbar />
      <Hero />
      <Stats />
      <Dashboard />

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-white/60 text-sm">
          <p>911 UI — Minimal, precise, responsive.</p>
          <a href="/test" className="hover:text-white">System Check</a>
        </div>
      </footer>
    </div>
  )
}

export default App
