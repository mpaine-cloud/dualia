export function Nosotros() {
  return (
    <section id="nosotros" className="py-32 px-6 md:px-12 border-b border-ink/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
         <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-48 w-12 hidden md:flex items-center justify-center z-10">
        <span className="rotate-90 text-[10px] uppercase tracking-[0.5em] whitespace-nowrap opacity-20 font-bold border-l border-ink pl-4">
          TRANSFORMACIÓN CONSCIENTE
        </span>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 justify-between items-start relative z-10">
        <div className="text-[10px] uppercase tracking-widest font-semibold opacity-60 pt-4 w-32 border-t border-ink">01 // Nosotros</div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] tracking-tight text-ink">
            ¿Qué es DUALIA?
          </h2>
          <p className="mt-8 text-lg font-serif opacity-80 max-w-2xl">
            Somos una firma boutique especializada en transformación organizacional desde el sistema humano. Integramos liderazgo, cultura, bienestar organizacional y comportamiento humano para generar <span className="italic font-light">resultados sostenibles</span>.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div>
              <h4 className="text-[18px] md:text-lg tracking-widest font-extrabold uppercase mb-2 text-ink">Propósito</h4>
              <p className="text-sm md:text-base opacity-80 font-normal">Diseñar organizaciones más humanas, conscientes y sostenibles.</p>
            </div>
            <div>
              <h4 className="text-[18px] md:text-lg tracking-widest font-extrabold uppercase mb-2 text-ink">Visión</h4>
              <p className="text-sm md:text-base opacity-80 font-normal">Convertirse en una consultora referente en transformación organizacional desde la integración.</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[18px] md:text-lg tracking-widest font-extrabold uppercase mb-2 text-ink">Misión</h4>
              <p className="text-sm md:text-base opacity-80 max-w-xl font-normal">Acompañar a líderes, equipos y organizaciones a construir estructuras humanas que sostengan resultados reales.</p>
            </div>
          </div>
          <div className="mt-12 w-12 h-px bg-ink opacity-30" />
        </div>
      </div>
    </section>
  );
}
