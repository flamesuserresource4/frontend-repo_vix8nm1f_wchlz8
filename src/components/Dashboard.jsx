import { motion } from 'framer-motion'
import { Gauge, TimerReset, Zap, Radio, Map, Settings } from 'lucide-react'

function Knob({ value = 68, label = 'Power' }) {
  return (
    <div className="relative aspect-square w-40 sm:w-48 md:w-56 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-3">
      <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
      <div className="relative h-full w-full rounded-full bg-black/40 grid place-items-center">
        <div className="absolute inset-3 rounded-full border-2 border-white/10" />
        <div className="absolute inset-7 rounded-full border-2 border-white/10" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-500/20 to-transparent blur-xl" />

        <div className="text-center">
          <p className="text-white/60 text-xs uppercase tracking-widest">{label}</p>
          <p className="text-5xl font-extrabold text-white">{value}</p>
        </div>
      </div>
    </div>
  )
}

function Card({ title, children, icon: Icon }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {children}
      <div className="absolute -bottom-20 -right-10 w-40 h-40 rounded-full bg-gradient-to-tr from-red-500/20 to-transparent blur-2xl" />
    </div>
  )
}

function Dashboard() {
  return (
    <section id="telemetry" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card title="Power Distribution" icon={Zap}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <Knob value={86} label="Front" />
                <Knob value={92} label="Rear" />
                <Knob value={74} label="Boost" />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card title="Drive Modes" icon={Gauge}>
              <div className="grid grid-cols-2 gap-3">
                {["Normal","Sport","Sport+","Track"].map(m => (
                  <button key={m} className="px-3 py-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors">{m}</button>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Card title="Lap Timer" icon={TimerReset}>
              <div className="flex items-end gap-4">
                <div>
                  <p className="text-4xl font-bold">01:27.53</p>
                  <p className="text-white/60 text-xs">Best</p>
                </div>
                <div className="ml-auto">
                  <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 font-semibold">Start</button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card title="Comms" icon={Radio}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10" />
                <div>
                  <p className="font-medium">Pit Wall</p>
                  <p className="text-white/60 text-sm">Radio link stable</p>
                </div>
                <div className="ml-auto">
                  <button className="px-3 py-2 rounded-lg border border-white/10 hover:bg-white/10">Open</button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Card title="Navigation" icon={Map}>
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card title="Configuration" icon={Settings}>
              <div className="grid grid-cols-2 gap-3">
                {["ABS","ESC","Diff","TC"].map(m => (
                  <button key={m} className="px-3 py-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors">{m}</button>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
