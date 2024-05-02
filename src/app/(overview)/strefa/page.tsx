import Image from "next/image";
import s1 from "../../../../public/x2.jpg";
import s2 from "../../../../public/x1.jpg";
import s3 from "../../../../public/himg.jpg";

export default function Strefa() {
  return (
    <>
      <div className=" relative h-52 w-full">
      <Image src={s1} className="object-cover object-center" fill alt="..." />
      </div>
      <div className=" relative h-52 w-full">
      <Image src={s2} className="object-cover object-center" fill alt="..." />
      </div>
      <div className=" relative h-52 w-full">
      <Image src={s3} className="object-cover object-center" fill alt="..." />
      </div>
      <div className=" relative h-52 w-full">
      <Image src={s1} className="object-cover object-center" fill alt="..." />
      </div>
      <div className=" relative h-52 w-full">
      <Image src={s3} className="object-cover object-center" fill alt="..." />
      </div>
      <div className=" relative h-52 w-full">
      <Image src={s1} className="object-cover object-center" fill alt="..." />
      </div>
      <div className=" relative h-52 w-full">
      <Image src={s2} className="object-cover object-center" fill alt="..." />
      </div>

    </>
  );
}
