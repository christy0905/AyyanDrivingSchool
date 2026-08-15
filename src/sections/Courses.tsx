import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";

export default function Courses() {
  return (
    <section id="courses" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Courses"
          title="Choose the Right Driving Course"
          subtitle="Whether you're starting from scratch or refining advanced skills, we have a course designed for your needs."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.name} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
