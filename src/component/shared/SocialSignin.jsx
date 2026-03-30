"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";

const SocialSignin = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleSocialLogin = async (provider) => {
    signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="flex btn items-center justify-center text-green-500"
      >
        <BsGoogle />
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        className="flex btn items-center justify-center text-green-500"
      >
        <BsGithub />
      </button>
    </div>
  );
};

export default SocialSignin;
