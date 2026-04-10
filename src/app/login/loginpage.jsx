"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/component/shared/SocialSignin";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });

    if (resp?.status === 200) {
      router.push("/");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/assets/images/login/login.svg"
            alt="login"
            height={500}
            width={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        <div className="border rounded-xl shadow-md p-6 sm:p-8 md:p-10 lg:p-12 bg-white">
          <h6 className="text-2xl sm:text-3xl font-semibold text-primary text-center mb-6">
            Login Now
          </h6>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <h6 className="text-center mb-4 text-sm sm:text-base">
              or signin with
            </h6>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <SocialSignin />
            </div>
          </div>

          <h6 className="mt-6 text-center text-sm sm:text-base">
            Not have an account?{" "}
            <Link href="/signup" className="text-primary font-medium">
              Sign Up
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
