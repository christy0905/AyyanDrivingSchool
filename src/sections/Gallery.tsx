import { images } from "@/data/images";
import SectionHeading from "@/components/SectionHeading";

const galleryItems = [
  { src: images.gallery1, alt: "Instructor teaching a learner at the wheel", span: "row-span-2" },
  { src: images.gallery2, alt: "Car interior with steering wheel and dashboard" },
  { src: images.gallery3, alt: "Hands on the steering wheel during a lesson" },
  { src: images.gallery4, alt: "Highway driving from inside the car" },
  { src: images.gallery5, alt: "Driving towards a scenic mountain road" },
  { src: images.gallery6, alt: "Busy city intersection with traffic", span: "row-span-2" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Learn. Practice. Drive."
          subtitle="A glimpse into our practical driving lessons and road training sessions."
        />
        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-xl shadow-md ${item.span ?? ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
