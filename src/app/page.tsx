import Image from "next/image";
import hero from "../../public/119042024_960861011082618_6769876556572508169_n.jpg"

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <div className="relative h-[90vh] w-full">
        <Image src={hero} alt="..." fill={true} className="object-cover object-bottom" />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60" />

        <div className="absolute left-1/2 top-1/2 z-20 flex max-w-screen-md -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-xl border p-12 text-center text-white/80 border-white/20">
          <div className="absolute w-full h-full top-0 left-0 bg-white/10 -z-10 blur-3xl" />
          <div>
            <h2 className="text-sm tracking-widest">Fotograf Siedlce</h2>
            <p className=" text-4xl tracking-wider font-bold my-1">Miło Cię widzieć</p>
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
