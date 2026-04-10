import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="hero min-h-screen text-slate-800 px-4 sm:px-6 lg:px-10">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <Image
            width={1000}
            height={1000}
            alt="Person image"
            src={"/assets/images/about_us/person.jpg"}
            className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-3/4  rounded-lg shadow-2xl"
          />

          <Image
            width={1000}
            height={1000}
            alt="Part image"
            src={"/assets/images/about_us/parts.jpg"}
            className="
              w-2/3 sm:w-1/2 
              absolute 
              right-2 sm:right-5 
              top-1/2 
              translate-y-[-50%]
              rounded-lg 
              border-4 sm:border-8 border-white 
              shadow-2xl
            "
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-orange-500 font-bold">
            About Us
          </h3>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We are qualified & of experience in this field
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          <div className="pt-2">
            <button className="btn btn-primary btn-sm sm:btn-md md:btn-lg">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
