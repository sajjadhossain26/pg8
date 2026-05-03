import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export default async function Profile(){const session=await auth.api.getSession({headers: await headers()}); if(!session) redirect('/login?redirect=/my-profile'); const u=session.user; return <section className="max-w-3xl mx-auto px-4 py-16"><div className="card bg-base-100 shadow-xl"><div className="card-body items-center text-center"><Image src={u.image || 'https://i.ibb.co/4pDNDk1/avatar.png'} alt={u.name || 'User'} width={130} height={130} className="rounded-full h-32 w-32 object-cover"/><h1 className="text-3xl font-black mt-4">{u.name}</h1><p>{u.email}</p><Link href="/my-profile/update" className="btn btn-primary mt-5">Update Profile</Link></div></div></section>}
