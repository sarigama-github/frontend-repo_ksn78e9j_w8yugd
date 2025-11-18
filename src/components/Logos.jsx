export default function Logos() {
  return (
    <section className="bg-rose-50/60 border-y border-rose-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-center text-rose-900/70 text-sm">Trusted by innovators and enterprises</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {['Acme', 'Globex', 'Umbrella', 'Initech', 'Hooli', 'Stark'].map((n) => (
            <div key={n} className="h-10 rounded-lg bg-white border border-rose-100 grid place-items-center text-rose-900/60 text-sm font-semibold">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
