import { useState } from 'react'
import { Menu, X, Gauge, Rocket, Settings, Zap } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Dashboard', icon: Gauge },
    { name: 'Performance', icon: Zap },
    { name: 'Launch', icon: Rocket },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_20px_rgba(255,0,0,0.25)] grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-white/95 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></span>
              </div>
              <div className="leading-tight">
                <p className="text-white text-sm/4 tracking-widest uppercase opacity-70">Series</p>
                <p className="text-white text-lg font-semibold tracking-tight">911 Control</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              {links.map(({ name, icon: Icon }) => (
                <button key={name} className="group inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white/80 hover:text-white transition-colors">
                  <span className="h-7 w-7 rounded-lg bg-white/5 group-hover:bg-white/10 grid place-items-center border border-white/10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{name}</span>
                </button>
              ))}
              <button className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:from-red-600 hover:to-red-700 transition-colors">
                Start
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-2 pb-3">
              {links.map(({ name }) => (
                <a key={name} className="block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors" href="#">
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
