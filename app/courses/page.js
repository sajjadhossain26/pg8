"use client";
import { useMemo, useState } from "react";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      courses.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );
  return (
    <section className="max-w-7xl mx-auto px-4 py-11">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-4xl font-black">All Courses</h1>
        <input
          className="input input-bordered w-full md:w-96"
          placeholder="Search by course title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center py-16 text-xl">No course found.</p>
      )}
    </section>
  );
}
