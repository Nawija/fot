import Image from "next/image";
import img2 from "../../../public/x2.jpg";
export default function Hero({ title }: { title: string }) {
  return (
    <section className="">
      <div className="flex items-center justify-around bg-main pt-24 pb-32">
        <div className="h-px w-1/4 bg-black"></div>
        <p className="text-2xl uppercase">{title}</p>
        <div className="h-px w-1/4 bg-black"></div>
      </div>
      <div className="grid grid-cols-2 -mt-32">
        <div className="relative h-60 p-10">
          <Image src={img2} alt="..."/>
        </div>
      </div>
    </section>
  );
}
