import { ArrowRight } from "lucide-react";

export function Impacto() {
  return (
    <section id="impacto" className="py-12 md:py-24 px-6 md:px-12 flex flex-col md:flex-row gap-0">
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto bg-[#F7F7F7] relative overflow-hidden group">
         <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
             alt="Cultura organizacional" 
             className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[15s] grayscale"
           />
           <div className="absolute inset-0 bg-[#F7F7F7] mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-1000"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F7]/90 via-[#F7F7F7]/40 to-transparent"></div>
         </div>
         <div className="absolute top-8 left-8 text-[var(--color-confianza)] z-10 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-sm border border-ink/10">
           <span className="text-[10px] uppercase tracking-widest font-bold">Nuestro Alcance</span>
         </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 bg-ink text-[var(--color-equilibrio)]">
        <h3 className="text-4xl md:text-5xl font-light mb-6 font-serif italic text-white">Impacto Dual</h3>
        <div className="w-12 h-px bg-[var(--color-accent)] mt-4 mb-8 opacity-60"></div>
        <p className="text-sm md:text-base leading-relaxed opacity-80 mb-12 max-w-md font-serif font-light text-[var(--color-claridad)]">
          Somos una firma boutique especializada en transformación organizacional desde el sistema humano. Integramos liderazgo, cultura, bienestar organizacional y comportamiento humano para generar resultados sostenibles.
        </p>
        
        <div className="flex flex-col gap-8 mb-12">
           <div className="group cursor-default">
              <h5 className="font-sans text-base md:text-lg uppercase tracking-widest font-black mb-3 text-[var(--color-accent)] group-hover:text-white transition-colors">DUALIA HUMAN</h5>
              <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity mb-2">Desarrollo individual, liderazgo interno y bienestar profundo. Trabajamos claridad personal, propósito, regulación emocional y hábitos sostenibles.</p>
              <ul className="text-sm opacity-70 group-hover:opacity-100 transition-opacity list-disc pl-4 space-y-1">
                <li>Claridad personal y propósito</li>
                <li>Regulación emocional</li>
                <li>Hábitos sostenibles</li>
                <li>Liderazgo interno</li>
              </ul>
           </div>
           <div className="group cursor-default">
              <h5 className="font-sans text-base md:text-lg uppercase tracking-widest font-black mb-3 text-[var(--color-accent)] group-hover:text-white transition-colors">DUALIA CORPORATE</h5>
              <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity mb-2">Cultura organizacional, liderazgo y performance sostenible. Intervenimos engagement, accountability, cohesión de equipos y bienestar corporativo.</p>
              <ul className="text-sm opacity-70 group-hover:opacity-100 transition-opacity list-disc pl-4 space-y-1">
                <li>Cultura organizacional</li>
                <li>Engagement y accountability</li>
                <li>Cohesión de equipos</li>
                <li>Productividad sostenible</li>
              </ul>
           </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
          <a href="#servicios" className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold group w-max text-white">
            <span>Ver Servicios</span>
            <div className="w-8 h-8 rounded-full border border-[var(--color-accent)] flex items-center justify-center group-hover:bg-[var(--color-brand)] group-hover:border-transparent transition-colors">
               <ArrowRight className="w-3 h-3 text-[var(--color-accent)] group-hover:text-white" />
            </div>
          </a>
          <a href="https://wa.me/56974897392" target="_blank" rel="noopener noreferrer" className="inline-block h-12 px-6 leading-[46px] text-center bg-white border border-white text-ink text-[10px] uppercase tracking-widest font-bold hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] hover:text-white transition-colors">
             Agenda una sesión
          </a>
        </div>
      </div>
    </section>
  );
}
