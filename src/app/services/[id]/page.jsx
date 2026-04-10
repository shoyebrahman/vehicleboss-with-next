import { getServicesDetails } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Service Details",
  description: "Service Details Page",
};

const Page = async ({ params }) => {
  const { id } = await params;

  const detailspage = await getServicesDetails(id);

  if (!detailspage) {
    return <div>No data found</div>;
  }
  const { _id, title, description, img, price, facility } = detailspage;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-10">
      <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
        <Image
          className="absolute w-full h-full object-cover"
          src={img}
          alt="service"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-8">
            Details of {title}
          </h1>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 rounded-xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-black leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {facility.map((item, index) => (
            <div
              key={index}
              className="bg-rose-100 p-4 sm:p-5 text-black border-t-4 border-rose-500 rounded-xl"
            >
              <h2 className="text-lg sm:text-xl font-bold">{item?.name}</h2>
              <p className="text-sm sm:text-base mt-1">{item?.details}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-4 sm:p-6 rounded-xl shadow-sm h-fit">
          <Image
            className="w-full object-cover h-32 sm:h-40 md:h-48 rounded-lg"
            src={"/assets/images/checkout/checkout.png"}
            alt="checkout service"
            width={400}
            height={400}
          />

          <div className="flex items-center gap-2 my-4">
            <h2 className="text-lg sm:text-xl font-bold">Price:</h2>
            <p className="text-xl sm:text-2xl text-rose-500">${price}</p>
          </div>

          <Link href={`/checkout/${_id}`}>
            <button className="bg-rose-500 hover:bg-rose-600 transition px-4 py-2 rounded-lg w-full text-white text-sm sm:text-base">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
