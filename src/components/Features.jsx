import { motion } from 'framer-motion'
import { Shield, Zap, Globe, Layers } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'Tokenization, HSM-backed keys, and continuous monitoring. Fully compliant and audited.',
    tint: 'from-emerald-400 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Real-time Payments',
    desc: 'Instant transfers, card issuing, and ledgering with sub-second latency.',
    tint: 'from-fuchsia-500 to-violet-500',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    desc: 'Scale across regions with multi-currency support, FX, and local rails.',
    tint: 'from-sky-400 to-indigo-400',
  },
  {
    icon: Layers,
    title: 'Modular Stack',
    desc: 'Pick the building blocks you need—cards, KYC, AML, fraud, and more.',
    tint: 'from-rose-400 to-orange-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Everything you need to build money movement</h2>
          <p className="mt-3 text-slate-300/90">A clean, modular platform that grows with you.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-tr ${f.tint} text-slate-950 grid place-items-center mb-4 group-hover:scale-105 transition-transform`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
