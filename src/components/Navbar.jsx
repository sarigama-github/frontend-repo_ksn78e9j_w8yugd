import { useState } from 'react'
import { Menu, CreditCard } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-rose-900 text-white grid place-items-center shadow-sm">
            <CreditCard className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-rose-900 tracking-tight">MotivePay</p>
            <p className="text-xs text-rose-700/70">Modern Fintech</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-rose-900/80 hover:text-rose-900 transition-colors">Features</a>
          <a href="#security" className="text-rose-900/80 hover:text-rose-900 transition-colors">Security</a>
          <a href="#pricing" className="text-rose-900/80 hover:text-rose-900 transition-colors">Pricing</a>
          <a href="#" className="text-rose-900/80 hover:text-rose-900 transition-colors">Docs</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-rose-200 text-rose-900 hover:bg-rose-50 transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-rose-900 text-white shadow-sm hover:bg-rose-800 transition">Get started</button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-rose-200 text-rose-900">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rose-100 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            <a href="#features" className="block text-rose-900">Features</a>
            <a href="#security" className="block text-rose-900">Security</a>
            <a href="#pricing" className="block text-rose-900">Pricing</a>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 px-4 py-2 rounded-lg border border-rose-200 text-rose-900">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-rose-900 text-white">Get started</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
