export function Sintomas() {
  return (
    <section className="py-24 bg-[var(--color-brand)] border-b border-ink/10 text-[var(--color-equilibrio)] relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover grayscale" />
       </div>
       <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-8 opacity-80"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-white">¿Reconoces esto en <span className="italic">tu organización?</span></h2>
          <p className="text-sm md:text-base opacity-80 mb-12 max-w-2xl mx-auto font-sans font-light text-[var(--color-claridad)]">
             Si identificas 3 o más de estos síntomas, tu organización necesita intervención estratégica:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left mx-auto max-w-2xl">
             {[
               "Equipos agotados y desconectados",
               "Alta rotación y ausentismo",
               "Liderazgos que no inspiran",
               "Cultura declarada pero no vivida",
               "Presión por resultados sin sostenibilidad",
               "Cambios que no se consolidan"
             ].map((sintoma, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                   <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] flex-shrink-0"></div>
                   <span className="text-sm opacity-90">{sintoma}</span>
                </div>
             ))}
          </div>
          <div className="mt-12 flex justify-center">
             <a href="https://wa.me/56974897392" target="_blank" rel="noopener noreferrer" className="inline-block h-14 px-8 leading-[54px] text-center bg-white border border-white text-ink text-[10px] uppercase tracking-widest font-bold hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-ink transition-colors">
                Agenda una sesión
             </a>
          </div>
       </div>
    </section>
  );
}
