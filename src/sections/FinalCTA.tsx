import { Phone, CalendarCheck } from "lucide-react";
import { TEL_LINK } from "@/config/siteConfig";
import { images } from "@/data/images";
import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-24">
      <img
        src={images.highway}
        alt="Open highway at sunset"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Start Your Driving Journey Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
          Book your first lesson and take the wheel with confidence. Our instructors
          are ready to help you drive safely and independently.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button as="a" href="#contact" size="lg">
            <CalendarCheck className="h-5 w-5" />
            Book a Driving Lesson
          </Button>
          <Button as="a" href={TEL_LINK} variant="outline" size="lg">
            <Phone className="h-5 w-5" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
