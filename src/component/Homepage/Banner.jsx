import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto text-white px-4 md:px-0">
      <div className="carousel w-full mt-8 md:mt-12">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
            }}
            className="carousel-item relative w-full bg-top bg-cover bg-no-repeat h-[60vh] md:h-[75vh] lg:h-[90vh] rounded-xl"
          >
            {/* Adjusted padding: mobile is centered/minimal, md+ uses left-alignment */}
            <div className="h-full w-full flex items-center px-6 md:pl-20 lg:pl-36 bg-black/20 md:bg-transparent">
              <div className="max-w-xl space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {banner.title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg">
                  {banner.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="btn btn-primary btn-sm md:btn-md">
                    Discover More
                  </button>
                  <button className="btn btn-outline text-white btn-sm md:btn-md">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation buttons: hidden on mobile, visible on tablet/desktop */}
            <div className="absolute hidden md:flex justify-between transform bottom-8 right-8 lg:bottom-12 lg:right-12">
              <a href={banner.prev} className="btn btn-circle mr-4 lg:mr-6">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
