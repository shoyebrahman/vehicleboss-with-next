import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, description, price, _id } = service || {};
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image height={430} width={430} src={img} alt={title}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white"> {title} </h2>

          <h5 className="text-white">Price : ${price}</h5>
          <div className="card-actions justify-end">
            <Link href={`/services/${_id}`}>
              <button className="btn btn-primary">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
