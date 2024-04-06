import Hero from "@/components/hero/Hero";
import Carousel from "@/components/react/Carouzel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="py-24">
        <div className="flex items-center justify-around mb-20">

          <div className="h-px w-1/4 bg-black"></div>
          <p className="text-2xl uppercase">MIŁO CIĘ WIDZIEĆ</p>
          <div className="h-px w-1/4 bg-black"></div>
        </div>
        <p className="max-w-screen-lg text-center mx-auto">
          Uśmiech na mojej twarzy to Wasza zasługa. Jestem szczęśliwym
          człowiekiem, który zamienił swoją pasje w sposób na życie.
          Obserwowanie i fotografowanie całej masy emocji tem szczęśliwym
          człowiekiem, który zamienił swoją pasje w sposób na życie.
          Obserwowanie i fotografowanie całej mastem szczęśliwym człowiekiem,
          który zamienił swoją pasje
        </p>
      </div>

      <Hero title="fotograf" />
    </>
  );
}
