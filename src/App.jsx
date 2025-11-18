import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-white text-rose-950">
      {/* Decorative background gradients */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(120%_80%_at_-10%_-10%,rgba(244,63,94,0.05),transparent_40%)]" />

      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-rose-100 bg-rose-50/60">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-rose-900/70">© {new Date().getFullYear()} MotivePay. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm text-rose-900/70">
            <a href="#" className="hover:text-rose-900">Privacy</a>
            <a href="#" className="hover:text-rose-900">Terms</a>
            <a href="#" className="hover:text-rose-900">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
