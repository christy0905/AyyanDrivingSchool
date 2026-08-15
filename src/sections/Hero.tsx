import { Phone, CalendarCheck, Check } from "lucide-react";
import { TEL_LINK } from "@/config/siteConfig";
import { images } from "@/data/images";
import Button from "@/components/Button";

const trustItems = [
  "Experienced Instructors",
  "Practical Road Training",
  "Flexible Timings",
  "Beginner Friendly",
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-slate-900">
      <img
        src={images.hero}
        alt="Driving instructor teaching a learner inside a car"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/30" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 ring-1 ring-amber-500/30">
            Professional Driving School
          </span>
          <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Learn to Drive With{" "}
            <span className="text-amber-400">Confidence</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Professional driving lessons designed to help beginners and experienced
            drivers become confident, safe and responsible on the road.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#contact" size="lg">
              <CalendarCheck className="h-5 w-5" />
              Book a Driving Lesson
            </Button>
            <Button as="a" href={TEL_LINK} variant="outline" size="lg">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </div>
          <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-200">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber-500 text-slate-900">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
