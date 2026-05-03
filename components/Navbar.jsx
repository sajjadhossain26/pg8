'use client';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const logout = async () => { await authClient.signOut(); toast.success('Logged out successfully'); window.location.href = '/'; };
  return <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-10">
    <div className="navbar-start"><Link href="/" className="text-2xl font-black text-primary">SkillSphere</Link></div>
    <div className="navbar-center hidden md:flex gap-6"><Link href="/">Home</Link><Link href="/courses">Courses</Link><Link href="/my-profile">My Profile</Link></div>
    <div className="navbar-end gap-3">
      {user ? <><Image src={user.image || 'https://i.ibb.co/4pDNDk1/avatar.png'} alt="avatar" width={38} height={38} className="rounded-full object-cover"/><button onClick={logout} className="btn btn-primary btn-sm">Logout</button></> : <><Link className="btn btn-ghost btn-sm" href="/login">Login</Link><Link className="btn btn-primary btn-sm" href="/register">Register</Link></>}
    </div>
  </div>;
}
