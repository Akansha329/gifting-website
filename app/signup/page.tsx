"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = () => {
    console.log("User Data:", form);

    // later → connect backend
    alert("Signup Successful!");

    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <div className="bg-white p-6 rounded-xl w-80">
        
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full border p-2 mb-4 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Signup
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-green-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}