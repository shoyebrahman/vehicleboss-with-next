"use client";
import { getServicesDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { use } from "react";

const Checkout = ({ params }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const { data } = useSession();
  const [service, setService] = useState({});
  // const loadService = async () => {
  //   const details = await getServicesDetails(params.id);
  //   setService(details);
  // };
  const { _id, title, img, price } = service || {};

  const handleBooking = async (event) => {
    event.preventDefault();
    const newBooking = {
      email: data?.user?.email,
      name: data?.user?.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
      date: event.target.date.value,
      serviceTitle: title,
      serviceID: _id,
      price: price,
    };

    const resp = await fetch(
      "https://vehicleboss-with-next.vercel.app/checkout/api/new-booking",
      {
        method: "POST",
        body: JSON.stringify(newBooking),
        headers: {
          "content-type": "application/json",
        },
      },
    );

    const response = await resp?.json();
    toast.success(response?.message);
    event.target.reset();
  };

  useEffect(() => {
    const loadService = async () => {
      const details = await getServicesDetails(id);
      setService(details);
    };

    if (id) {
      loadService();
    }
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ToastContainer />

      <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
        {img && (
          <Image
            className="absolute w-full h-full object-cover"
            src={img}
            alt="service"
            width={1920}
            height={1080}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-8">
            Checkout {title}
          </h1>
        </div>
      </div>

      <div className="my-8 sm:my-12 bg-slate-200 rounded-xl p-4 sm:p-6 md:p-10 lg:p-12">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                type="text"
                name="name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]}
                type="date"
                name="date"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={data?.user?.email}
                type="text"
                name="email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                value={price || ""}
                readOnly
                type="text"
                name="price"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="mt-6">
            <input
              className="btn btn-primary w-full text-base sm:text-lg"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
