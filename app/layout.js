import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';
export const metadata = { title: 'SkillSphere', description: 'Online Learning Platform' };
export default function RootLayout({ children }) { return <html lang="en" data-theme="light" suppressHydrationWarning><body suppressHydrationWarning><Navbar/><main className="min-h-screen">{children}</main><Footer/><Toaster richColors position="top-right"/></body></html>; }
