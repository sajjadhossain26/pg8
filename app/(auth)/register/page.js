"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await authClient.signUp.email(form);
    setLoading(false);
    if (error) return toast.error(error.message || "Registration failed");
    toast.success("Registration successful. Please login.");
    router.push("/login");
  };
  const google = () =>
    authClient.signIn.social({ provider: "google", callbackURL: "/" });
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-black text-center">Register</h1>
          <form onSubmit={register} className="space-y-4 mt-4">
            <input
              required
              placeholder="Name"
              className="input input-bordered w-full"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Photo URL"
              className="input input-bordered w-full"
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>
          <button onClick={google} className="btn btn-outline w-full mt-3">
            Continue with Google
          </button>
          <p className="text-center mt-4">
            Already have account?{" "}
            <Link className="link link-primary" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
