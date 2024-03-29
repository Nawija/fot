import Hero from "@/components/hero/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      <p className="text-color ml-auto mt-2 w-max font-serif text-[1.3rem] font-bold uppercase tracking-wider lg:mt-8 xl:text-[6.5rem] xl:tracking-wide">
        prawdziwa fotografia
      </p>

      <section className="mx-auto my-24 flex max-w-screen-2xl flex-col items-center space-x-4 lg:my-12 lg:flex-row lg:space-x-12">
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
            <Link href="/" className="bg-color px-4 py-2 font-medium">
              Czytaj Więcej
            </Link>
            <Link href="/" className="bg-gray-200 px-4 py-2 font-medium">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <section
        className="text-main relative h-screen w-full bg-fixed object-cover object-center"
        style={{
          backgroundImage:
            "url(https://scontent.cdninstagram.com/v/t39.30808-6/397572315_18395007547056005_5649272228057465666_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=SYkZP8N6-DoAX8pScc1&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzIzMTYyNjY1NDA2MTg4MjY5Ng%3D%3D.2-ccb7-5&oh=00_AfCrK6qoiT7imDR76TWc5FqjfpdhRsM0ZtYBDVR1H24vhw&oe=660C5910&_nc_sid=10d13b)",
        }}
      >
        <div className="sticky top-0 mx-auto w-full space-y-3 bg-black/30 p-10 backdrop-blur-md">
          <h3 className="text-center">Weronika i Maciek</h3>
          <p>
            Pełen profesjonalizm! Myślę, że najlepszą recenzją będzie fakt, że
            efekty przerosły Nasze najśmielsze oczekiwania 😍 Jarek towarzyszył
            Nam podczas Chrztu Świętego córki i z całego serca polecam wszystkim
            współpracę z Jarkiem podczas tak ważnego wydarzenia. Jarek
            zaczarował małą i idealnie uchwycił wszystkie gesty i momenty. Na
            pewno jeszcze nie raz spotkamy się z Jarkiem podczas ważnych dla Nas
            wydarzeń. ❤️
          </p>
        </div>
      </section>
      <section
        className="text-main relative h-screen w-full bg-fixed object-cover object-center"
        style={{
          backgroundImage:
            "url(https://scontent.cdninstagram.com/v/t39.30808-6/365971394_18376842307056005_3027769158836357266_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzY0eDEzNjQuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=AsfVP7HaWtQAX8yExzB&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzE2MjcyNzMzNzA5Nzc2MjA4NQ%3D%3D.2-ccb7-5&oh=00_AfCm5G5y-TUaKcLHTXjGITzT1IdgfblTWPawPkiEXQTEvA&oe=660A596F&_nc_sid=10d13b)",
        }}
      >
        <div className="sticky bottom-0 mx-auto w-3/4 space-y-3 bg-black/30 p-10">
          <h3 className="text-center">Magda</h3>
          <p>
            Fotograf na 5! 😊 Uchwycił wszystkie najważniejsze momenty i
            atmosferę tego dnia. Współpraca układała się znakomicie. Wspiera i
            doradzą a jest to bardzo potrzebne gdy pojawią się zdenerwowanie😁
            Wspaniałe zdjęcia dzięki którym z łezka w oku będę wracać do dnia
            ślubu. Serdecznie polecam!
          </p>
        </div>
      </section>
    </>
  );
}
