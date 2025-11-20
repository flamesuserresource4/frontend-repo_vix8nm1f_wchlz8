import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-white/70 text-xs mb-5">Porsche Design System</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            911 Dashboard
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-red-300">Performance Control</span>
          </h1>
          <p className="mt-6 text-white/80 text-lg max-w-2xl">
            A minimalist cockpit inspired interface with precision motion and an interactive, 3D power grid.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#overview" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-white/90 transition-colors">Overview</a>
            <a href="#telemetry" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">Live Telemetry</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
