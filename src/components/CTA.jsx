import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_10%_50%,rgba(34,211,238,0.18),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14 shadow-2xl"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Ready to build the future of finance?</h3>
            <p className="mt-3 text-slate-300/90">Start integrating in minutes. Our sandbox is free and full-featured—no credit card required.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="px-5 py-3 rounded-lg bg-gradient-to-tr from-emerald-400 via-cyan-400 to-fuchsia-500 text-slate-950 font-semibold shadow hover:opacity-90 transition">Create free account</a>
            <a href="#" className="px-5 py-3 rounded-lg border border-white/10 text-slate-100 hover:bg-white/5 transition">Talk to sales</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
