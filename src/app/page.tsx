import CarouselHero from "@/components/hero/CarouselHero";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Home() {
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: LockClosedIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: ServerIcon,
    },
  ];
  return (
    <>
      <CarouselHero />

      <div className="-mt-1 flex items-center justify-center space-x-1 ">
        <div className="w-1/2">
          <img src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1628075930986-T1HL7BSSP7SU75W3K8U6/02_sesja_slubna_siedlce.jpg?format=2500w" />
        </div>
        <div className="w-1/2">
          <img src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1628075933587-3XES53T172RDMK5M0TP3/04_sesja_narzeczenska_siedlce.jpg?format=2500w" />
        </div>
      </div>
      <div className="relative mt-12 text-center text-4xl font-semibold">
        <p>Cześć! Miło mi że tu jesteś</p>
        <div className="mx-auto mt-4 h-1 w-40 rounded-full bg-yellow-600" />
      </div>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-yellow-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="relative">
              <img
                className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 border-4 shadow-2xl"
                src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1628075933587-3XES53T172RDMK5M0TP3/04_sesja_narzeczenska_siedlce.jpg?format=2500w"
              />
              <img
                className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 border-4 shadow-2xl"
                src="https://images.squarespace-cdn.com/content/v1/5c50e49a620b85ae0e3923e7/1628075933587-3XES53T172RDMK5M0TP3/04_sesja_narzeczenska_siedlce.jpg?format=2500w"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
