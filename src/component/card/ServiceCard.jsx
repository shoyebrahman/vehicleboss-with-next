import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, description, price, _id } = service || {};

  return (
    <div
      className="
        card bg-base-100 shadow-md border rounded-xl 
        w-full max-w-sm mx-auto
        hover:shadow-xl transition-all duration-300
      "
    >
      <figure>
        <Image
          src={img}
          width={400}
          height={225}
          alt={title}
          className=" h-56 object-cover rounded-t-xl"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl font-semibold">{title}</h2>

        <p className="text-gray-700 font-medium">Price: ${price}</p>

        <div className="card-actions justify-end">
          <Link href={`/services/${_id}`}>
            <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
