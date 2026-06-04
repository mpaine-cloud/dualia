import { TrendingDown, Users, Sun, HeartHandshake, Star, Zap } from "lucide-react";

export function Resultados() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-secondary)] border-b border-ink/10 relative overflow-hidden">
       <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover grayscale" />
       </div>
       <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          
          {/* Metodología */}
          <div>
             <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-ink">Nuestra <span className="italic">Metodología</span></h2>
             <p className="text-sm opacity-80 mb-12 font-serif">Integramos herramientas probadas para facilitar procesos de cambio que nacen desde el interior de las personas hacia toda la estructura organizacional.</p>
             
             <div className="space-y-10">
                <div className="relative pl-8 border-l border-ink/20">
                   <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-[var(--color-accent)]"></div>
                   <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Paso 1 - Diagnóstico Consciente</h4>
                   <p className="text-sm opacity-70">Mapeamos la cultura actual, las creencias subyacentes y las dinámicas del sistema humano para comprender el punto de partida.</p>
                </div>
                <div className="relative pl-8 border-l border-ink/20">
                   <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-ink"></div>
                   <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Paso 2 - Desafío de Creencias</h4>
                   <p className="text-sm opacity-70">Utilizamos The Work de Byron Katie y la metodología QLT para cuestionar las narrativas limitantes y generar nuevas perspectivas. Nos basamos en sistemas de hábitos para diseñar rutinas exitosas.</p>
                </div>
                <div className="relative pl-8 border-l border-ink/20">
                   <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-ink"></div>
                   <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">Paso 3 - Integración y Resultados</h4>
                   <p className="text-sm opacity-70">Anclamos los nuevos aprendizajes en procesos y comportamientos medibles para asegurar una transformación sostenible.</p>
                </div>
             </div>
          </div>

          {/* Resultados ESPERADOS */}
          <div className="flex flex-col">
             <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-ink">Impacto <span className="italic">Esperado</span></h2>
             <p className="text-sm opacity-80 mb-12 font-serif">Intervenciones que generan impacto real y medible en tu organización, transformando la cultura desde el bienestar de las personas.</p>
             
             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { title: "Disminución de ausentismo", icon: TrendingDown },
                  { title: "Cohesionado de equipos", icon: Users },
                  { title: "Mejor clima laboral", icon: Sun },
                  { title: "Engagement organizacional", icon: HeartHandshake },
                  { title: "Liderazgo", icon: Star },
                  { title: "Mayor productividad", icon: Zap },
                ].map((res, i) => {
                   const Icon = res.icon;
                   return (
                      <div key={i} className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:items-start gap-4 bg-white/40 p-6 rounded-xl border border-ink/5 hover:bg-white/60 transition-colors">
                         <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-[var(--color-brand)]" />
                         </div>
                         <h5 className="text-sm font-semibold text-ink leading-tight flex-1 flex items-center sm:items-start pt-2 sm:pt-0 sm:mt-2.5">{res.title}</h5>
                      </div>
                   );
                })}
             </div>
          </div>
          
       </div>
    </section>
  );
}
