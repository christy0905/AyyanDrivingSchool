import { GraduationCap, Car, ShieldCheck, Clock, UserRound, Smile } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { title: "Experienced Instructors", desc: "Professional and patient instructors who adapt to your learning pace.", icon: GraduationCap },
  { title: "Practical Training", desc: "Learn through real driving experience on actual roads, not just theory.", icon: Car },
  { title: "Safety First", desc: "A strong focus on responsible driving and road safety awareness.", icon: ShieldCheck },
  { title: "Flexible Timings", desc: "Training designed around your schedule, including weekend slots.", icon: Clock },
  { title: "Individual Attention", desc: "Focused, one-on-one guidance for every learner throughout the course.", icon: UserRound },
  { title: "Confidence Building", desc: "Training designed to make you comfortable and calm behind the wheel.", icon: Smile },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Us?"
          subtitle="We focus on building safe, confident drivers through structured practical training."
          light
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-2xl bg-slate-800/60 p-6 ring-1 ring-slate-700 transition-all duration-300 hover:bg-slate-800 hover:ring-amber-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-900">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
