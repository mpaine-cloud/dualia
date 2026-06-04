export function Footer() {
  return (
    <footer className="pt-24 pb-0 flex flex-col bg-[var(--color-confianza)] text-[var(--color-equilibrio)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 mb-24">
         <div>
           <h2 className="text-5xl md:text-[80px] font-light leading-[0.9] font-serif mb-8 text-[var(--color-equilibrio)]">
              ¿Listo para <br/><span className="italic md:ml-8 text-[var(--color-accent)]">dar el paso?</span>
           </h2>
           <a href="https://wa.me/56974897392" target="_blank" rel="noopener noreferrer" className="inline-block h-14 px-8 leading-[56px] text-center bg-[var(--color-equilibrio)] border border-[var(--color-equilibrio)] text-ink text-[10px] uppercase tracking-widest font-bold hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] hover:text-white transition-colors">
              Agenda una sesión
           </a>
         </div>
         
         <div className="grid grid-cols-2 gap-8 text-sm text-[var(--color-equilibrio)]">
            <div className="flex flex-col gap-4 border-l border-white/10 pl-8">
               <h5 className="uppercase text-[10px] tracking-widest font-semibold opacity-60 mb-4 text-[var(--color-claridad)]">Empresa</h5>
               <p className="opacity-80 font-serif leading-relaxed">
                 Diseñando organizaciones más humanas, conscientes y sostenibles a través de la integración de estrategia, personas y cultura.
               </p>
            </div>
            <div className="flex flex-col gap-4 border-l border-white/10 pl-8">
               <h5 className="uppercase text-[10px] tracking-widest font-semibold opacity-60 mb-4 text-[var(--color-claridad)]">Contacto</h5>
               <a href="mailto:Contacto@dualiaconsultora.cl" className="opacity-80 hover:text-[var(--color-accent)] transition-colors">Contacto@dualiaconsultora.cl</a>
               <a href="https://wa.me/56974897392" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-[var(--color-accent)] transition-colors">+56 9 7489 7392</a>
               
               <h5 className="uppercase text-[10px] tracking-widest font-semibold opacity-60 mb-4 mt-8 text-[var(--color-claridad)]">Redes</h5>
               <div className="flex gap-4">
                 <a href="https://www.instagram.com/dualiaconsultora/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-white text-[10px] uppercase tracking-widest font-bold">IG</a>
                 <a href="https://www.linkedin.com/company/dualia-consultora-boutique/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:text-white text-[10px] uppercase tracking-widest font-bold">IN</a>
               </div>
            </div>
         </div>
      </div>
      
      {/* Bottom Bar matching theme style */}
      <div className="h-24 md:h-20 border-t border-white/10 flex items-center px-6 md:px-12 justify-center md:justify-between flex-col md:flex-row bg-[var(--color-brand)]/20">
        <div className="flex gap-8 md:gap-16 pt-4 md:pt-0">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Enfoque en Sostenibilidad</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[var(--color-claridad)]"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70">Impacto Real</span>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.1em] opacity-40 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} DUALIA. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
