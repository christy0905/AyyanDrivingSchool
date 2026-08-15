import type { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-slate-900 shadow-lg">
          <Icon className="h-5 w-5" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
