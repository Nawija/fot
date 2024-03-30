import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <h1 className="mx-auto my-20 max-w-screen-2xl px-4 text-start text-2xl font-semibold tracking-wide text-color lg:text-5xl">
        Historie uwiecznione obiektywem - Fotograf Siedlce: Tworzenie
        Niezapomnianych Wspomnień
      </h1> */}

      <section className="mx-auto my-0 flex max-w-screen-2xl flex-col items-center space-x-4 lg:-mt-12 lg:mb-12 lg:flex-row lg:space-x-12">
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

      <section
        className="my-12 flex items-center justify-center space-x-10 bg-fixed object-cover object-center p-24 lg:my-24"
        style={{
          backgroundImage:
            "url(https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1630358749510-7EK0NBK2NJ9I0ZF7EZR1/IMG_004sesja-narzeczenska-roksana-kamil-fotograf-jarek-olszewski.JPG?format=2500w)",
        }}
      >
        <div className="flex max-w-60 flex-col items-start justify-center pt-2">
          <div className="relative z-10 h-12 w-full  bg-gray-200">
            <img
              className="-mb-12 ml-7 mt-2 h-20 w-20 rounded-full border-4 border-gray-100 object-cover object-center"
              src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1630358749510-7EK0NBK2NJ9I0ZF7EZR1/IMG_004sesja-narzeczenska-roksana-kamil-fotograf-jarek-olszewski.JPG?format=2500w"
            />
            <img
              className="absolute left-0 top-0 -z-10 h-full w-full border-b-4 border-color object-cover object-center"
              src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1630358749510-7EK0NBK2NJ9I0ZF7EZR1/IMG_004sesja-narzeczenska-roksana-kamil-fotograf-jarek-olszewski.JPG?format=2500w"
            />
          </div>

          <div className="space-y-3 bg-white p-7 pt-12 ">
            <h3 className="font-bold text-black">Sesja Slubna</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
              reprehenderit dolorum quod.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
