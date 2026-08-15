import type { Testimonial } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`}
            />
          ))}
        </div>
        <Quote className="h-8 w-8 text-slate-200" />
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
        "{testimonial.text}"
      </blockquote>
      <figcaption className="mt-5 border-t border-slate-100 pt-4">
        <div className="font-semibold text-slate-900">{testimonial.name}</div>
        <div className="text-xs text-slate-500">{testimonial.location}</div>
      </figcaption>
    </figure>
  );
}
