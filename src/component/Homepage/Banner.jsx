import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto text-white px-4 sm:px-6 lg:px-8">
      <div className="carousel w-full mt-6 sm:mt-10">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`,
            }}
            className="
              carousel-item 
              relative 
              w-full 
              bg-center bg-cover bg-no-repeat 
              h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] 
              rounded-xl
            "
          >
            <div className="h-full w-full flex items-center">
              <div
                className="
                space-y-4 sm:space-y-5 md:space-y-6 
                max-w-xl 
                px-4 sm:px-8 md:px-12 lg:px-20
                text-center lg:text-left
              "
              >
                <h1
                  className="
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                  font-bold leading-tight
                "
                >
                  {banner.title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/90">
                  {banner.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <button className="btn btn-primary btn-sm sm:btn-md">
                    Discover More
                  </button>

                  <button className="btn btn-outline text-white btn-sm sm:btn-md">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div
              className="
              absolute 
              flex justify-between 
              w-full 
              px-4 sm:px-6 lg:px-10 
              bottom-4 sm:bottom-6 md:bottom-10
            "
            >
              <a href={banner.prev} className="btn btn-circle btn-sm sm:btn-md">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle btn-sm sm:btn-md">
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
      "There are many variations of passages available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
