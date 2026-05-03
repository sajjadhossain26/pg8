import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer footer-center bg-slate-900 text-white p-10 mt-16">
      <aside>
        <h2 className="text-3xl font-black">SkillSphere</h2>
        <p>Contact: support@skillsphere.com | +971 50 000 0000</p>
        <p>Learn smarter. Grow faster.</p>
      </aside>
      <nav className="grid grid-flow-col gap-4">
        <a>Facebook</a>
        <a>LinkedIn</a>
        <a>Instagram</a>
        <Link href="/terms">Terms & Conditions</Link>
        <Link href="/privacy">Privacy Policy </Link>
      </nav>
    </footer>
  );
}
