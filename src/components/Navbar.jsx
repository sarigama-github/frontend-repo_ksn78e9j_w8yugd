import { useState } from 'react'
import { Menu, CreditCard } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-violet-500 text-white grid place-items-center shadow-sm">
            <CreditCard className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-white tracking-tight">MotivePay</p>
            <p className="text-xs text-slate-300/80">Modern Fintech</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300/80 hover:text-white transition-colors">Features</a>
          <a href="#security" className="text-slate-300/80 hover:text-white transition-colors">Security</a>
          <a href="#pricing" className="text-slate-300/80 hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-slate-300/80 hover:text-white transition-colors">Docs</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-gradient-to-tr from-emerald-400 via-cyan-400 to-fuchsia-500 text-slate-950 font-semibold shadow-sm hover:opacity-90 transition">Get started</button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-white/10 text-slate-200">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            <a href="#features" className="block text-slate-100">Features</a>
            <a href="#security" className="block text-slate-100">Security</a>
            <a href="#pricing" className="block text-slate-100">Pricing</a>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 px-4 py-2 rounded-lg border border-white/10 text-slate-200">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-tr from-emerald-400 via-cyan-400 to-fuchsia-500 text-slate-950 font-semibold">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
