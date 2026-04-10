import React from "react";
import ServiceCard from "../card/ServiceCard";
import { getServices } from "@/services/getServices";

const Services = async () => {
  const services = await getServices();

  return (
    <div className="text-slate-800 min-h-screen px-4 sm:px-6 lg:px-10 py-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600">
          Our Services
        </h3>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Service Area
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          The majority have suffered alteration in some form, by injected
          humour.
        </p>
      </div>

      <div
        className="
        mt-8 sm:mt-10 md:mt-12
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-4 sm:gap-5 md:gap-6
      "
      >
        {services?.length > 0 &&
          services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default Services;
