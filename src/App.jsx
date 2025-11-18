import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* Aurora background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-20 -left-10 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500" />
        <div className="absolute top-1/3 -right-20 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-emerald-400 via-sky-400 to-violet-500" />
        <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-15 bg-gradient-to-tr from-rose-500 via-orange-400 to-yellow-400" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300/80">© {new Date().getFullYear()} MotivePay. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-slate-300/80">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
