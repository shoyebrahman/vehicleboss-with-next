import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, description, price, _id } = service || {};

  return (
    <div className="w-full">
      <div className="card bg-base-100 w-full shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
        <figure className="w-full h-40 sm:h-48 md:h-52 lg:h-60 xl:h-64 overflow-hidden">
          <Image
            src={img}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body p-3 sm:p-4 md:p-5">
          <h2 className="card-title text-sm sm:text-base md:text-lg lg:text-xl text-white">
            {title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/80 line-clamp-2">
            {description}
          </p>

          <h5 className="text-sm sm:text-base md:text-lg text-white font-semibold">
            Price: ${price}
          </h5>

          <div className="card-actions justify-end mt-2">
            <Link href={`/services/${_id}`}>
              <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
