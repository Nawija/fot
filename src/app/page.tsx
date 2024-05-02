import Hero from "@/components/hero/Hero";
import { AiFillBulb } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="anim-opacity">
        <Hero />
        <div className="py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="rounded-full border p-6 mr-3">
              <AiFillBulb className="text-3xl text-gray-300" />
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Kreatywna Fotografia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dicta sapiente exercitationem?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full border p-6 mr-3">
              <AiFillBulb className="text-3xl text-gray-300" />
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Kreatywna Fotografia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-full border p-6 mr-3">
              <AiFillBulb className="text-3xl text-gray-300" />
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Kreatywna Fotografia</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dicta sapiente
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
