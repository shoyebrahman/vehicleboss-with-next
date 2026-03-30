"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const page = () => {
  const handlesubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const resp = await fetch("http://localhost:3000/signup/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(resp);
    if (resp.status === 200) {
      event.target.reset();
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
          ></Image>
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center">
            SignUp Now
          </h6>
          <form onSubmit={handlesubmit}>
            <label htmlFor="email">Name</label> <br />
            <input
              type="text"
              placeholder="your name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              placeholder="your email"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              placeholder="your password"
              name="password"
              className="input input-bordered w-full max-w-xs"
            />{" "}
            <br />
            <button className="w-full btn btn-primary mt-12">Sign In</button>
          </form>
          <div>
            <h6 className="my-12 text-center">or signin with</h6>
            <div className="flex items-center justify-center space-x-3">
              <button className="btn p-6 flex items-center justify-center text-primary">
                {" "}
                <FaGoogle />
              </button>
              <button className="btn p-6 flex items-center justify-center text-primary">
                {" "}
                <FaGithub />{" "}
              </button>
            </div>
            <h6 className="my-12 text-center">
              not have an accout ? <Link href={"/login"}> Sign In</Link>{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
