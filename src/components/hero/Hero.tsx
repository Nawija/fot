export default function Hero({ title }: { title: string }) {
  return (
    <section className="bg-main p-24">
      <div className="flex items-center justify-around">
        <div className="h-px w-1/4 bg-black"></div>
        <p className="text-2xl uppercase">{title}</p>
        <div className="h-px w-1/4 bg-black"></div>
      </div>
    </section>
  );
}
