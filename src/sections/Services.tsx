import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Our Driving Services"
          subtitle="Comprehensive training programs tailored to every level of driver, from first-time beginners to experienced drivers looking to sharpen their skills."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
