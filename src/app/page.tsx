import Image from "next/image";
import hero from "../../public/119042024_960861011082618_6769876556572508169_n.jpg";

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className=" h-full w-full left-0 top-0 fixed overflow-hidden -z-10">
          <Image
            src={hero}
            alt="..."
            fill={true}
            className="object-cover object-bottom"
          />
        </div>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60" />

        <div className="absolute left-1/2 top-1/2 z-20 flex max-w-screen-md -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-xl border border-white/20 p-12 text-center text-white/80">
          <div className="absolute left-0 top-0 -z-10 h-full w-full bg-white/10 blur-3xl" />
          <div>
            <h2 className="text-sm tracking-widest">Fotograf Siedlce</h2>
            <p className=" my-1 w-max text-2xl font-bold tracking-wider lg:text-4xl">
              Miło Cię widzieć
            </p>
            <p className="text-sm tracking-widest">Jarosław</p>
          </div>
          <h1 className="text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
            soluta quidem voluptate at illum excepturi repellat. Veritatis eius
            sunt asperiores ipsam?
          </h1>
        </div>
      </div>
    </>
  );
}
