"use client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/";
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.signIn.email({
      ...form,
      callbackURL: redirect,
    });
    setLoading(false);
    if (error) return toast.error(error.message || "Login failed");
    toast.success("Login successful");
    router.push(redirect);
  };
  const google = () =>
    authClient.signIn.social({ provider: "google", callbackURL: "/" });
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-black text-center">Login</h1>
          <form onSubmit={login} className="space-y-4 mt-4">
            <input
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <button onClick={google} className="btn btn-outline w-full mt-3">
            Continue with Google
          </button>
          <p className="text-center mt-4">
            New here?{" "}
            <Link className="link link-primary" href="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
