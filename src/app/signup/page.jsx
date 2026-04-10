"use client";
import SocialSignin from "@/component/shared/SocialSignin";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//import { FaGoogle, FaGithub } from "react-icons/fa";

const page = () => {
  const handlesubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch(
      "https://vehicleboss-with-next.vercel.app/signup/api",
      {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "content-type": "application/json",
        },
      },
    );
    console.log(resp);
    const data = await resp.json();
    console.log(data);

    if (resp.ok) {
      await signIn("credentials", {
        email: newUser.email,
        password: newUser.password,
        redirect: true,
        callbackUrl: "/",
      });
    } else {
      alert(data.message);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/assets/images/login/login.svg"
            alt="signup"
            height={500}
            width={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        <div className="border rounded-xl shadow-md p-6 sm:p-8 md:p-10 lg:p-12 bg-white">
          <h6 className="text-2xl sm:text-3xl font-semibold text-primary text-center mb-6">
            Sign Up Now
          </h6>

          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm sm:text-base">Name</label>
              <input
                type="text"
                placeholder="your name"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm sm:text-base">Email</label>
              <input
                type="text"
                placeholder="your email"
                name="email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm sm:text-base">
                Password
              </label>
              <input
                type="password"
                placeholder="your password"
                name="password"
                className="input input-bordered w-full"
              />
            </div>

            <button className="w-full btn btn-primary mt-4 text-base sm:text-lg">
              Sign Up
            </button>
          </form>

          <div className="mt-6">
            <h6 className="text-center mb-4 text-sm sm:text-base">
              or sign up with
            </h6>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <SocialSignin></SocialSignin>
            </div>
          </div>

          <h6 className="mt-6 text-center text-sm sm:text-base">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium">
              Sign In
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default page;
