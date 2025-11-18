export default function Logos() {
  return (
    <section className="bg-slate-950/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-center text-slate-300/80 text-sm">Trusted by innovators and enterprises</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {['Acme', 'Globex', 'Umbrella', 'Initech', 'Hooli', 'Stark'].map((n) => (
            <div key={n} className="h-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-slate-200 text-sm font-semibold">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
