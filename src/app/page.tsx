import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <p className="text-color ml-auto mt-2 w-max font-serif text-[1.3rem] font-bold uppercase tracking-wider lg:mt-8 xl:text-[6.5rem] xl:tracking-wide">
        prawdziwa fotografia
      </p>

      <section className="mx-auto my-24 flex max-w-screen-2xl flex-col items-center space-x-12 lg:my-12 lg:flex-row">
        <div className="s-left lg:w-1/2">
          <img src="https://scontent.cdninstagram.com/v/t39.30808-6/393923247_18391204693056005_6708677791160825069_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=ulYpoPhAVdEAX8LxdaA&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIxNzczMzQ0Njg5NjE4NTY5MA%3D%3D.2-ccb7-5&oh=00_AfDbal-jr4gLzVLv_dGpJDAFhm8EK83BrZThQrCXdoTNeA&oe=660C65B1&_nc_sid=10d13b" />
        </div>
        <div className="s-right p-4 lg:w-1/2">
          <p className="py-6 text-5xl">Miło Cię widzieć</p>
          <div className="bg-color h-[2px] w-1/3 rounded-3xl" />
          <p className="py-10 text-lg">
            Uśmiech na mojej twarzy to Wasza zasługa. Jestem szczęśliwym
            człowiekiem, który zamienił swoją pasje w sposób na życie.
            Obserwowanie i fotografowanie całej masy emocji tem szczęśliwym
            człowiekiem, który zamienił swoją pasje w sposób na życie.
            Obserwowanie i fotografowanie całej masytem szczęśliwym człowiekiem,
            który zamienił swoją pasje
          </p>
          <div className="flex items-center space-x-10">
            <Link href="/" className="bg-color px-4 py-2">
              Czytaj Więcej
            </Link>
            <Link href="/" className="bg-gray-200 px-4 py-2">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
