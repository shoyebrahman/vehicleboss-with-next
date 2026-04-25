import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content px-6 py-10">
      <div
        className="container mx-auto grid 
                grid-cols-2
                sm:text-2xl
                sm:gap-4
                sm:mt-3
                sm:grid-cols-2 
                md:grid-cols-3 
                md:gap-10
                lg:grid-cols-4 
                lg:gap-10"
      >
        {/* Logo Section */}
        <aside>
          <Image
            src={"https://i.ibb.co/DHzw9Ltn/logo2.png"}
            width={100}
            height={90}
            alt={"logo image"}
            className="  rounded-t-xl"
          />
          <p className="text-sm">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        {/* Services */}
        <nav className="mt-4">
          <h6 className="footer-title mb-3">Services</h6>
          <a className="link link-hover block">Branding</a>
          <a className="link link-hover block">Design</a>
          <a className="link link-hover block">Marketing</a>
          <a className="link link-hover block">Advertisement</a>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title mb-3">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Jobs</a>
          <a className="link link-hover block">Press kit</a>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title mb-3">Legal</h6>
          <a className="link link-hover block">Terms of use</a>
          <a className="link link-hover block">Privacy policy</a>
          <a className="link link-hover block">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
}
