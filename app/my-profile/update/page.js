"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
export default function UpdateProfile() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  if (isPending)
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (!session && typeof window !== "undefined")
    router.push("/login?redirect=/my-profile/update");
  const update = async (e) => {
    e.preventDefault();
    const { error } = await authClient.updateUser({
      name: name || session.user.name,
      image: image || session.user.image,
    });
    if (error) return toast.error(error.message || "Update failed");
    toast.success("Profile updated");
    router.push("/my-profile");
  };
  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-black text-center">
            Update Informations
          </h1>
          <form onSubmit={update} className="space-y-4 mt-4">
            <input
              placeholder="New name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="New image URL"
              className="input input-bordered w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button className="btn btn-primary w-full">
              Update Informations
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
