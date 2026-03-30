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
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            alt="login"
            height={540}
            width={540}
          />
        </div>

        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center">
            Login Now
          </h6>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <br />

            <input
              type="text"
              placeholder="your email"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />

            <br />

            <label>Password</label>
            <br />

            <input
              type="password"
              placeholder="your password"
              name="password"
              className="input input-bordered w-full max-w-xs"
            />

            <br />

            <button className="w-full btn btn-primary mt-12">Sign In</button>
          </form>

          <div>
            <h6 className="my-12 text-center">or signin with</h6>

            <div className="flex items-center justify-center space-x-3">
              <SocialSignin></SocialSignin>
            </div>

            <h6 className="my-12 text-center">
              not have an account ? <Link href="/signup">Sign Up</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
