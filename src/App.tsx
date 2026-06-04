import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Nosotros } from "./components/Nosotros";
import { Impacto } from "./components/Impacto";
import { Servicios } from "./components/Servicios";
import { Sintomas } from "./components/Sintomas";
import { Resultados } from "./components/Resultados";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] overflow-x-hidden selection:bg-[var(--color-brand)] selection:text-[var(--color-equilibrio)]">
      <Navigation />
      <Hero />
      <Nosotros />
      <Impacto />
      <Servicios />
      <Sintomas />
      <Resultados />
      <Footer />
    </div>
  );
}
