import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        {/* light background with deep red accents */}
        <div className="pt-28 pb-24 md:pt-36 md:pb-36 bg-gradient-to-b from-white to-rose-50/60">
          {/* subtle gradient overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_90%_20%,rgba(190,18,60,0.08),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_80%,rgba(225,29,72,0.06),transparent_60%)]" />

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-6 lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-rose-200 bg-white/70 backdrop-blur text-rose-900 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-700 animate-pulse" />
                Enterprise-grade fintech platform
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-rose-950">
                Banking infrastructure for modern businesses
              </h1>
              <p className="mt-5 text-rose-900/80 text-lg leading-relaxed">
                Launch cards, accounts, and real-time payments with a single API. Designed for speed, scale, and rock-solid security.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#" className="px-5 py-3 rounded-lg bg-rose-900 text-white shadow hover:bg-rose-800 transition">
                  Get started
                </a>
                <a href="#features" className="px-5 py-3 rounded-lg border border-rose-200 text-rose-900 hover:bg-rose-50 transition">
                  Explore features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-rose-900/60">
                <div className="text-sm">
                  <p className="font-semibold text-rose-900">PCI-DSS Level 1</p>
                  <p>Certified</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-rose-900">99.99%</p>
                  <p>Uptime</p>
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-rose-900">T+0</p>
                  <p>Settlement</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-6 lg:col-span-6"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-rose-200/60 shadow-xl">
                {/* Empty placeholder because Spline is used as global background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
