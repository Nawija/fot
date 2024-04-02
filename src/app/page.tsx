import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto my-0 flex max-w-screen-xl flex-col items-center space-y-4 lg:mb-12 lg:mt-12 lg:space-y-12">
        <h1 className="text-center text-4xl font-medium">
          Uśmiech na mojej twarzy to Wasza zasługa. Jestem szczęśliwym
          człowiekiem, który zamienił swoją pasje w sposób na życie
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661443474386-b1c19ca8d0de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661443474386-b1c19ca8d0de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661443474386-b1c19ca8d0de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661443474386-b1c19ca8d0de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto my-0 flex max-w-screen-xl flex-col items-center space-x-4 lg:mb-12 lg:mt-48 lg:flex-row lg:space-x-12">
        <div className="s-left lg:w-1/2">
          <img src="https://scontent.cdninstagram.com/v/t39.30808-6/393923247_18391204693056005_6708677791160825069_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNTIuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=ulYpoPhAVdEAX8LxdaA&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIxNzczMzQ0Njg5NjE4NTY5MA%3D%3D.2-ccb7-5&oh=00_AfDbal-jr4gLzVLv_dGpJDAFhm8EK83BrZThQrCXdoTNeA&oe=660C65B1&_nc_sid=10d13b" />
        </div>
        <div className="s-right order-first mb-12 p-4 lg:order-last lg:my-0 lg:w-1/2">
          <p className="py-6 text-5xl">Miło Cię widzieć</p>
          <div className="h-[2px] w-1/3 rounded-3xl bg-color" />
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
              className="border-2 border-transparent bg-color px-4 py-2 font-medium transition-colors hover:border-gray-500 hover:text-white"
            >
              Czytaj Więcej
            </Link>
            <Link
              href="/"
              className="border-2 border-transparent bg-gray-200 px-4 py-2 font-medium transition-colors hover:border-color hover:bg-zinc-100 hover:text-color"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
