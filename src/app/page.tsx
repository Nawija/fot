import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <h1 className="text-color mx-auto my-20 max-w-screen-lg px-4 text-center text-2xl font-semibold tracking-wide lg:text-4xl">
        Historie uwiecznione obiektywem - Fotograf Siedlce: Tworzenie
        Niezapomnianych Wspomnień
      </h1>

      <section className="mx-auto my-12 flex max-w-screen-2xl flex-col items-center space-x-4 lg:my-12 lg:flex-row lg:space-x-12">
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
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="bg-color border-2 border-transparent px-4 py-2 font-medium transition-colors hover:border-gray-500 hover:text-white"
            >
              Czytaj Więcej
            </Link>
            <Link
              href="/"
              className="hover:text-color hover:border-color border-2 border-transparent bg-gray-200 px-4 py-2 font-medium transition-colors hover:bg-zinc-100"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
