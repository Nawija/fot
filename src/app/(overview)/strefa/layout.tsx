import { NAVLINKS } from "@/constants/Links";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="anim-opacity">
      <div className="relative flex h-[27vh] w-full items-center justify-center">
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center"
          src="https://cdn.pixabay.com/photo/2020/01/02/17/25/champagne-4736380_1280.jpg"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30" />
        <h1 className="z-30 text-4xl font-semibold text-white">
          Strefa Klienta
        </h1>
      </div>
      <div className="mx-auto px-3 mt-2 flex max-w-screen-2xl space-x-3">
        <p>Home</p>
        <span>-</span>
        <p>Strefa Klienta</p>
      </div>
      <section className="mx-auto mt-10 lg:mt-20 flex lg:flex-row flex-col max-w-screen-2xl items-start justify-start">
        <div className="flex lg:flex-col items-start justify-start lg:space-x-0 space-x-4 lg:space-y-3 bg-gray-100 px-10 lg:px-12 py-8 overflow-x-scroll lg:overflow-hidden w-full lg:w-auto whitespace-nowrap">
          {NAVLINKS.map((link) => (
            <p className="w-max">{link.label}</p>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 lg:pl-12 w-full gap-2">{children}</div>
      </section>
    </div>
  );
}
