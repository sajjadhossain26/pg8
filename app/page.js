import { courses, instructors } from '@/data/courses';
import CourseCard from '@/components/CourseCard';
import Image from 'next/image';
import { BookOpen, Clock, Target } from 'lucide-react';

export default function Home(){
 const popular=[...courses].sort((a,b)=>b.rating-a.rating).slice(0,3);
 const trending=courses.slice(2,5);
 return <>
  <section className="hero min-h-[75vh] bg-gradient-to-br from-indigo-950 via-purple-900 to-primary text-white">
   <div className="hero-content text-center"><div className="max-w-3xl"><p className="badge badge-accent mb-5">Learn from Industry Experts</p><h1 className="text-5xl md:text-7xl font-black leading-tight">Upgrade Your Skills Today 🚀</h1><p className="py-6 text-lg opacity-90">Explore skill-based programs in Web Development, Design, Marketing, Business, and more.</p><a href="/courses" className="btn btn-accent btn-lg">Explore Courses</a></div></div>
  </section>
  <section className="max-w-7xl mx-auto px-4 py-16"><h2 className="text-4xl font-black mb-8">🔥 Popular Courses</h2><div className="grid md:grid-cols-3 gap-8">{popular.map(c=><CourseCard key={c.id} course={c}/>)}</div></section>
  <section className="bg-white py-16"><div className="max-w-7xl mx-auto px-4"><h2 className="text-4xl font-black mb-8">📌 Learning Tips</h2><div className="grid md:grid-cols-3 gap-6">{[['Set clear goals',Target],['Study with time blocks',Clock],['Practice every day',BookOpen]].map(([t,Icon])=><div key={t} className="p-8 rounded-3xl bg-slate-50 shadow"><Icon className="text-primary mb-4" size={36}/><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-gray-600">Build consistency, revise lessons, and complete projects after each module.</p></div>)}</div></div></section>
  <section className="max-w-7xl mx-auto px-4 py-16"><h2 className="text-4xl font-black mb-8">🏆 Top Instructors</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{instructors.map(i=><div key={i.name} className="card bg-base-100 shadow-xl p-6 text-center"><Image src={i.image} alt={i.name} width={100} height={100} className="rounded-full mx-auto h-24 w-24 object-cover"/><h3 className="font-bold text-xl mt-4">{i.name}</h3><p className="text-gray-600">{i.role}</p></div>)}</div></section>
  <section className="max-w-7xl mx-auto px-4 py-16"><h2 className="text-4xl font-black mb-8">👉 Trending Courses</h2><div className="grid md:grid-cols-3 gap-8">{trending.map(c=><CourseCard key={c.id} course={c}/>)}</div></section>
 </>;
}
