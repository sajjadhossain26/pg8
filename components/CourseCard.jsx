import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:-translate-y-1 transition overflow-hidden">
      <figure>
        <Image
          src={course.image}
          alt={course.title}
          width={600}
          height={350}
          className="h-52 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="badge badge-primary">{course.category}</div>
        <h2 className="card-title">{course.title}</h2>
        <p className="text-sm text-gray-600">By {course.instructor}</p>
        <p className="line-clamp-2">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-1 font-bold">
            <Star size={18} className="fill-current" /> {course.rating}
          </span>
          <span>{course.level}</span>
        </div>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" href={`/courses/${course.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
