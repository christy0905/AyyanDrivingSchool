import { Car, TrafficCone, ParkingSquare, Check } from "lucide-react";
import { images } from "@/data/images";
import Button from "@/components/Button";

const trainingModules = [
  {
    title: "Beginner Training",
    icon: Car,
    items: ["Car controls", "Steering", "Clutch", "Gear shifting", "Braking", "Starting and stopping", "Turning", "Lane discipline"],
  },
  {
    title: "Road Training",
    icon: TrafficCone,
    items: ["Traffic signals", "Junctions", "Lane changes", "U-turns", "Traffic awareness", "Real-world city driving"],
  },
  {
    title: "Parking Training",
    icon: ParkingSquare,
    items: ["Reverse parking", "Parallel parking", "Parking in tight spaces", "Reverse manoeuvring"],
  },
];

export default function InCarDriving() {
  return (
    <section id="in-car-driving" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            In-Car Driving
          </span>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-[2.5rem]">
            In-Car Driving Lessons
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Get hands-on experience with practical driving lessons designed around your
            experience and confidence level.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src={images.inCarDriving}
              alt="In-car driving lesson with instructor"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-5">
            {trainingModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="flex-1 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{mod.title}</h3>
                  </div>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="h-3.5 w-3.5 flex-none text-amber-600" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button as="a" href="#contact" size="lg">
            Enquire About Driving Lessons
          </Button>
        </div>
      </div>
    </section>
  );
}
