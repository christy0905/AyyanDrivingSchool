import SectionHeading from "@/components/SectionHeading";

const steps = [
  { number: "01", title: "Enquire", desc: "Tell us what type of training you need." },
  { number: "02", title: "Choose Your Course", desc: "Select the course that matches your experience." },
  { number: "03", title: "Start Driving", desc: "Begin practical lessons with an instructor." },
  { number: "04", title: "Drive Confidently", desc: "Build the skills required for independent driving." },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Journey in Four Steps"
          subtitle="A simple, structured path from your first enquiry to driving independently."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-[3.25rem] top-7 hidden h-0.5 w-full bg-gradient-to-r from-amber-300 to-amber-100 md:block" />
              )}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-slate-900 shadow-lg ring-4 ring-amber-100">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
