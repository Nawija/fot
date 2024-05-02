import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/119042024_960861011082618_6769876556572508169_n.jpg"
export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden px-4 lg:h-[75vh]">
      <div className="relative  -z-30 h-full  w-full overflow-hidden rounded-lg">
        <Image
          src={hero}
          alt="..."
          fill={true}
          className="object-cover object-bottom -z-20"
        />
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black/20" />
      </div>

      <div className="z-30 flex flex-col items-center justify-center space-y-4 text-white">
        <div>
          <p className="text-sm tracking-widest">Fotograf Siedlce</p>
          <h1 className=" my-1 w-max text-2xl font-semibold tracking-wider lg:text-6xl">
            Miło Cię widzieć
          </h1>
          <p className="text-sm tracking-widest">Jarosław</p>
        </div>
        <h2 className="text-white/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
          soluta quidem voluptate at illum excepturi repellat. Veritatis eius
          sunt asperiores ipsam?
        </h2>
        <Link
          href="/"
          className="z-10 mt-6 bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wider text-black"
        >
          Więcej
        </Link>
      </div>
    </div>
  );
}
