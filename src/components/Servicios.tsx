export function Servicios() {
  return (
    <>
      {/* Servicios / Coach Individual */}
      <section id="servicios" className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-y border-ink/5 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
            <img src="https://images.unsplash.com/photo-1499728603263-13726abce5fd?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover grayscale" />
         </div>
         <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-light tracking-tight w-full md:w-auto font-serif">
              Dualia <br/><span className="italic opacity-80 pl-4 md:pl-8">Human</span>
            </h2>
            <div className="max-w-xl">
                <p className="text-lg md:text-xl opacity-90 mb-4 font-serif">Los 6 Pilares de la Felicidad Individual. Entender el sistema de creencias y resignificar para alcanzar el bienestar auténtico.</p>
                <div className="text-[11px] md:text-xs font-semibold uppercase tracking-widest opacity-70 mt-4">Proceso Diagnóstico y Causalidad: Creencias, Heridas de Infancia y Resignificación</div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-ink/10 relative z-10">
            {[
              { num: "01", title: "Creer en la felicidad", desc: "Valor: Fe | Emoción: Angustia | Somatización: Bazo" },
              { num: "02", title: "Resiliencia", desc: "Valor: Honestidad | Emoción: Rabia | Somatización: Hígado" },
              { num: "03", title: "Evitar procrastinar", desc: "Valor: Responsabilidad | Emoción: Miedo | Somatización: Riñón" },
              { num: "04", title: "Cultivar relaciones", desc: "Valor: Empatía | Emoción: Tristeza | Somatización: Pulmón" },
              { num: "05", title: "Estar agradecidos", desc: "Valor: Agradecimiento | Emoción: Vacío | Somatización: Corazón" },
              { num: "06", title: "Autocuidado", desc: "Valor: Amor | Emoción: Rechazo | Somatización: Médula" },
            ].map((srv, idx) => (
              <div key={idx} className="p-8 md:p-12 border-b border-ink/10 [&:nth-child(3n)]:border-r-0 md:border-r hover:bg-white transition-colors cursor-pointer group relative">
                <div className="text-[10px] tracking-widest font-bold opacity-30 mb-8 group-hover:opacity-100 transition-opacity uppercase">{srv.num}</div>
                <h4 className="text-xl font-serif italic mb-4 text-ink">{srv.title}</h4>
                <div className="w-8 h-px bg-ink mb-4 opacity-30 group-hover:w-12 transition-all"></div>
                <p className="text-xs opacity-60 leading-relaxed font-bold uppercase tracking-wide group-hover:opacity-100 transition-opacity">{srv.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Servicios / Coach Corporativo */}
      <section className="py-24 md:py-32 bg-[var(--color-bg-primary)] border-b border-ink/10 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover grayscale" />
         </div>
         <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-end mb-16 gap-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-light tracking-tight w-full md:w-auto font-serif">
              Dualia <br/><span className="italic opacity-80 pl-4 md:pl-8">Corporate</span>
            </h2>
            <div className="max-w-xl">
               <p className="text-lg md:text-xl opacity-90 mb-4 font-serif">Culturas alineadas con valores y propósito para construir organizaciones sostenibles. Exploramos las dimensiones fundamentales de nuestra intervención.</p>
            </div>
         </div>
         
         <div className="px-6 md:px-12 mb-8 mt-12 md:mt-0 relative z-10">
            <h3 className="text-2xl font-serif italic text-ink">6 Pilares de Inversión Cultural</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-ink/10 relative z-10">
            {[
              { num: "01", title: "Propósito", desc: "La organización tiene un «para qué» que va más allá del beneficio económico.", impact: "Directivos" },
              { num: "02", title: "Adaptabilidad", desc: "Capacidad de evolucionar ante los cambios del entorno con agilidad y confianza.", impact: "Líderes" },
              { num: "03", title: "Pertenencia", desc: "Las personas se sienten parte del equipo, valoradas y escuchadas.", impact: "Operaciones" },
              { num: "04", title: "Clima Laboral", desc: "Un ambiente de trabajo respetuoso, positivo y motivador para todos.", impact: "RRHH" },
              { num: "05", title: "Incentivos", desc: "Reconocimiento justo y motivador que impulsa el crecimiento individual y colectivo.", impact: "Ventas y MKT" },
              { num: "06", title: "Capacitación", desc: "Inversión en el desarrollo continuo de las personas como base de la rentabilidad.", impact: "Finanzas" },
            ].map((srv, idx) => (
              <div key={idx} className="p-8 md:p-12 border-b border-ink/10 [&:nth-child(3n)]:border-r-0 lg:border-r hover:bg-[var(--color-equilibrio)] transition-colors cursor-pointer group relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none"></div>
                <div className="relative z-10">
                   <div className="text-[10px] tracking-widest font-bold opacity-30 mb-8 group-hover:opacity-100 transition-opacity uppercase">{srv.num} // {srv.impact}</div>
                   <h4 className="text-xl font-serif italic mb-4 text-ink">{srv.title}</h4>
                   <div className="w-8 h-px bg-ink mb-4 opacity-30 group-hover:w-12 transition-all"></div>
                   <p className="text-sm opacity-60 leading-relaxed group-hover:opacity-100 transition-opacity">{srv.desc}</p>
                </div>
              </div>
            ))}
         </div>
      </section>
    </>
  );
}
