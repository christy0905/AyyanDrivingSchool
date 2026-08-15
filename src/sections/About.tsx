import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={images.about}
                alt="Hands on the steering wheel during a driving lesson"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-amber-500 px-6 py-5 text-slate-900 shadow-xl sm:block lg:-right-6">
              <p className="text-3xl font-bold leading-none">10+</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide">Years Experience</p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Driving Lessons That Build Real Confidence"
              align="left"
            />
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Learning to drive is an important milestone. Our training focuses on
              practical skills, road awareness and confidence so that learners can
              handle everyday driving safely.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              We combine patient instruction with real-world road experience, helping
              every learner progress at their own pace — from first-time beginners to
              licensed drivers looking to refresh their skills.
            </p>
            <ul className="mt-6 space-y-3">
              {["Patient, certified instructors", "Practical, hands-on road training", "Flexible scheduling including weekends"].map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button as="a" href="#in-car-driving" variant="secondary">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
