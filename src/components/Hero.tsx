import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-[105px] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-multiply">
         <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Hero background" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-0 relative border-b border-ink/10 z-10">
        
        {/* Left Column matching theme style */}
        <div className="md:col-span-5 border-r border-ink/10 flex flex-col justify-between order-2 md:order-1 relative group overflow-hidden bg-[var(--color-confianza)]">
           <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Feliciad impact" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[15s] grayscale" />
             <div className="absolute inset-0 bg-[var(--color-brand)] mix-blend-multiply opacity-80 group-hover:opacity-60 transition-opacity duration-1000"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-confianza)]/90 via-[var(--color-confianza)]/40 to-transparent"></div>
           </div>
           
           <div className="p-8 md:p-12 relative z-10 flex flex-col justify-between h-full text-[var(--color-equilibrio)]">
              <div className="relative mb-12 md:mb-0">
                 <div className="absolute -left-4 md:-left-8 top-0 h-full w-[1px] bg-[var(--color-accent)] opacity-50"></div>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                 >
                   <p className="text-sm leading-relaxed max-w-xs opacity-90 font-medium">
                   </p>
                 </motion.div>
              </div>
              
              <div className="flex justify-between items-end mt-16 md:mt-0">
                 <div className="text-[80px] leading-none font-serif italic tracking-tighter text-[var(--color-accent)]">01</div>
                 <div className="text-[10px] uppercase tracking-widest text-right">
                    <p>Transformación y Bienestar</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Column matching theme style */}
        <div className="md:col-span-7 flex flex-col justify-center px-8 md:px-16 py-24 md:py-0 relative bg-[var(--color-bg-secondary)]/50 order-1 md:order-2">
          <div className="absolute top-12 right-12 hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-ink rotate-45">
            <div className="w-px h-8 bg-ink"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[90px] leading-[0.95] font-serif font-light tracking-tight text-ink">
             Transformación <br /> <span className="italic ml-4 md:ml-16">organizacional</span><br /> <span className="text-4xl md:text-5xl lg:text-[60px] opacity-80 block mt-2 md:mt-4">desde el sistema humano</span>
            </h1>
          </motion.div>

          <motion.div 
             className="mt-12 max-w-lg"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-ink text-white text-[11px] uppercase tracking-widest font-bold cursor-pointer transition-colors hover:bg-[var(--color-brand)]" onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}>
                  Descubrir
               </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        onClick={() => {
          document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
         <div className="w-10 h-10 rounded-full border border-ink flex items-center justify-center text-xs">
            <ChevronDown className="w-4 h-4 opacity-50" />
         </div>
         <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">Desplazarse para explorar</span>
      </motion.div>
    </section>
  );
}
