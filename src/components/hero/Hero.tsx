import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import HeroImage from "../../../public/himg.jpg";
export default function Hero() {
  return (
    <div className="relative -z-10 h-[90vh] w-full bg-zinc-500 lg:h-[80vh]">
      <div className="absolute inset-0 left-0 top-0 z-0 h-full w-full bg-black/10" />
      <Image
        src={HeroImage}
        alt="..."
        style={{ objectPosition: "50% 75%" }}
        className="-z-10 object-cover"
        placeholder="blur"
        fill
      />
      <span className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 -rotate-90 font-serif text-8xl uppercase tracking-widest text-[#ffffff1f] opacity-55 lg:text-9xl lg:opacity-100">
        siedlce
      </span>
      <p className="absolute left-[30%] top-[60%] -translate-x-1/2 -translate-y-1/2 font-serif text-5xl uppercase text-main xl:text-9xl">
        Fotograf
        <small className="absolute right-4 top-full -mt-3 text-base tracking-[.1rem] opacity-50 lg:text-xl lg:tracking-[1rem]">
          Jarek Olszewski
        </small>
      </p>
      <div className="fixed right-10 top-0 z-[999999] flex flex-col items-center justify-center space-y-3  rounded-3xl text-white">
        <div className="h-24 w-[2px] bg-second md:h-40" />
        <Link href="/">
          <RiInstagramFill className="text-2xl text-second hover:text-main" />
        </Link>
        <Link href="/">
          <FaSquareFacebook className="text-2xl text-second hover:text-main" />
        </Link>
      </div>
    </div>
  );
}
