import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem as FaqItemType } from "@/data/faq";

interface FAQItemProps {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50"
      >
        <span className="text-sm font-semibold text-slate-900 sm:text-base">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-none text-amber-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
