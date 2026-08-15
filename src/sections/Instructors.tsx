import { images } from "@/data/images";
import SectionHeading from "@/components/SectionHeading";

const instructors = [
  { name: "Rajesh Kumar", role: "Senior Driving Instructor", exp: "12+ years", desc: "Specialises in beginner training and building confidence in first-time drivers.", image: images.instructor1 },
  { name: "Suresh Patel", role: "Highway & Defensive Trainer", exp: "9+ years", desc: "Focuses on highway driving, defensive techniques and advanced manoeuvring.", image: images.instructor2 },
  { name: "Anand Krishnan", role: "Parking & Manoeuvre Expert", exp: "8+ years", desc: "Expert in parking techniques, reverse driving and tight-space handling.", image: images.instructor3 },
  { name: "Vijay Mohan", role: "Refresher Course Instructor", exp: "10+ years", desc: "Helps licensed drivers regain confidence and sharpen their road skills.", image: images.instructor4 },
];

export default function Instructors() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our Driving Instructors"
          subtitle="Patient, certified and experienced instructors dedicated to helping you become a confident driver."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((inst) => (
            <article
              key={inst.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={inst.image}
                  alt={inst.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900">{inst.name}</h3>
                <p className="text-sm font-semibold text-amber-600">{inst.role}</p>
                <p className="mt-1 text-xs text-slate-500">{inst.exp} experience</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{inst.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
