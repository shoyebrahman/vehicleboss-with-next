import React from "react";
import ServiceCard from "../card/ServiceCard";
import { getServices } from "@/services/getServices";

const Services = async () => {
  const services = await getServices();

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600">
          Our Services
        </h1>

        <p className="text-gray-600 mt-3 text-sm sm:text-base px-2 sm:px-10">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <h1 className="mt-4 text-lg sm:text-xl font-semibold">
          Total Services: {services.length}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {services?.length > 0 &&
          services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default Services;
