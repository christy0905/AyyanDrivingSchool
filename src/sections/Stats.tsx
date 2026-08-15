import SectionHeading from "@/components/SectionHeading";

// Replace with verified business statistics before production
const stats = [
  { value: "5000+", label: "Students Trained" },
  { value: "10+", label: "Years Experience" },
  { value: "4.9/5", label: "Student Rating" },
  { value: "95%", label: "Student Satisfaction" },
];

export default function Stats() {
  return (
    <section className="bg-amber-500 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Track Record"
          title="Trusted by Thousands of Learners"
          light
        />
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-bold text-slate-900 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-800">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
