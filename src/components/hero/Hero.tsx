import Image from "next/image";
import HeroImage from "../../../public/himg.jpg";

export default function Hero() {
  return (
    <div className="relative -z-10 h-[80vh] w-full">
      <Image
        src={HeroImage}
        alt="..."
        style={{ objectPosition: "50% 75%" }}
        className="object-cover"
        fill
      />
      <span className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 -rotate-90 font-serif text-9xl uppercase tracking-widest text-[#ffffff1f]">
        siedlce
      </span>
      <span className="text-main absolute left-[42%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-8xl text-white">
        Fotograf
      </span>
    </div>
  );
}
