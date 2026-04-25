"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosCart, IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const session = useSession();
  console.log(session);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
          >
            {navitems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300 "
                href={item.path}
                key={item.path}
              >
                {" "}
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {navitems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="font-semibold">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-3 items-center">
          <IoIosCart />
          <IoMdSearch />
        </div>

        {!session.data ? (
          <Link className="btn btn-outline btn-primary" href={"/login"}>
            Login
          </Link>
        ) : (
          <button
            className="btn btn-outline btn-primary"
            onClick={() => signOut()}
          >
            {" "}
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

const navitems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/theservice",
  },
  {
    title: "MyBooking",
    path: "/mybookings",
  },
];

export default Navbar;
