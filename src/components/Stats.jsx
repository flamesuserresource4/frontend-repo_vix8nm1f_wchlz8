import { motion } from 'framer-motion'
import { Gauge, Activity, Battery, Thermometer } from 'lucide-react'

const stats = [
  { label: '0-60 mph', value: '2.8s', icon: Gauge },
  { label: 'G-Force', value: '1.15g', icon: Activity },
  { label: 'Battery Temp', value: '78°F', icon: Thermometer },
  { label: 'Charge', value: '86%', icon: Battery },
]

function Stats() {
  return (
    <section id="overview" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest">{label}</p>
                  <p className="mt-2 text-3xl font-bold">{value}</p>
                </div>
                <div className="h-11 w-11 rounded-xl bg-white/10 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="absolute -bottom-16 right-0 w-40 h-40 rounded-full bg-gradient-to-tr from-red-500/20 to-transparent blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
