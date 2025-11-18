import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Multicolour Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        {/* Aurora overlay for depth */}
        <div className="pt-28 pb-24 md:pt-36 md:pb-36 bg-gradient-to-b from-slate-950/60 to-slate-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_10%,rgba(168,85,247,0.25),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_90%_80%,rgba(34,211,238,0.18),transparent_60%)]" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-7 lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-slate-100 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-emerald-400 to-fuchsia-500 animate-pulse" />
                Enterprise-grade fintech platform
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Multicolour banking infrastructure for modern businesses
              </h1>
              <p className="mt-5 text-slate-300/90 text-lg leading-relaxed">
                Launch cards, accounts, and real-time payments with a single API. Designed for speed, scale, and rock-solid security.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#" className="px-5 py-3 rounded-lg bg-gradient-to-tr from-emerald-400 via-cyan-400 to-fuchsia-500 text-slate-950 font-semibold shadow hover:opacity-90 transition">
                  Get started
                </a>
                <a href="#features" className="px-5 py-3 rounded-lg border border-white/10 text-slate-100 hover:bg-white/5 transition">
                  Explore features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-slate-300/80">
                <div className="text-sm">
                  <p className="font-semibold text-white">PCI-DSS Level 1</p>
                  <p>Certified</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">99.99%</p>
                  <p>Uptime</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-white">T+0</p>
                  <p>Settlement</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-5 lg:col-span-5"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-[conic-gradient(at_50%_50%,#22c55e_0deg,#06b6d4_120deg,#a78bfa_240deg,#fb7185_360deg)] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
