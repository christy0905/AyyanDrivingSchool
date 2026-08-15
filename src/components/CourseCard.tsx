import type { Course } from "@/data/courses";
import { Check, Star } from "lucide-react";
import Button from "./Button";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        course.popular
          ? "bg-slate-900 text-white shadow-2xl ring-2 ring-amber-500"
          : "bg-white text-slate-900 shadow-md ring-1 ring-slate-100 hover:shadow-xl"
      }`}
    >
      {course.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-lg">
          <Star className="h-3 w-3 fill-slate-900" />
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold">{course.name}</h3>
      <p
        className={`mt-1 text-sm ${course.popular ? "text-slate-300" : "text-slate-500"}`}
      >
        {course.audience}
      </p>
      <ul className="mt-5 flex-1 space-y-3">
        {course.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                course.popular ? "bg-amber-500 text-slate-900" : "bg-amber-100 text-amber-700"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={course.popular ? "text-slate-200" : "text-slate-700"}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <Button
        as="a"
        href="#contact"
        variant={course.popular ? "primary" : "secondary"}
        size="md"
        className="mt-7 w-full"
      >
        Enquire Now
      </Button>
    </article>
  );
}
