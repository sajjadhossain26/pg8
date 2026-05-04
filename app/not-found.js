import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-black text-primary">404</h1>
      <p className="text-xl mt-3">Page not found</p>
      <Link className="btn btn-primary mt-6" href="/">
        Back Home
      </Link>
    </div>
  );
}
