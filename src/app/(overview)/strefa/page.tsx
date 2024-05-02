export default function Strefa() {
  return (
    <div className="anim-opacity">
      <div className="relative flex h-[27vh] w-full items-center justify-center">
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center"
          src="https://cdn.pixabay.com/photo/2020/01/02/17/25/champagne-4736380_1280.jpg"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30" />
        <h1 className="text-4xl font-semibold text-white z-30">Strefa Klienta</h1>
      </div>
    </div>
  );
}
