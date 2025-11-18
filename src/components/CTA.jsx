import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_10%_50%,rgba(244,63,94,0.08),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-rose-200 bg-white p-10 md:p-14 shadow-lg"
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-rose-950">Ready to build the future of finance?</h3>
            <p className="mt-3 text-rose-900/75">Start integrating in minutes. Our sandbox is free and full-featured—no credit card required.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="px-5 py-3 rounded-lg bg-rose-900 text-white shadow hover:bg-rose-800 transition">Create free account</a>
            <a href="#" className="px-5 py-3 rounded-lg border border-rose-200 text-rose-900 hover:bg-rose-50 transition">Talk to sales</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
