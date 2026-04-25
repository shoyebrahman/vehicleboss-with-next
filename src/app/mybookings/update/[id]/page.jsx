"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
//import { toast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import { use } from "react";

const Page = ({ params }) => {
  const { data } = useSession();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [booking, setBooking] = useState([]);
  //   const loadBooking = async () => {
  //     try {
  //       const resp = await fetch(
  //         `https://vehicleboss-with-next.vercel.app/checkout/api/booking/${id}`,
  //       );
  //       const result = await resp.json();
  //       setBooking(result.data); // ডাটা সেভ করা হচ্ছে
  //     } catch (error) {
  //       console.error("Fetch error:", error);
  //     }
  //   };
  const { _id, address, description, img, date, price, phone } = booking || {};

  const handleUpdateBooking = async (event) => {
    event.preventDefault();
    const updatedBooking = {
      date: event.target.date.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    const resp = await fetch(
      `https://vehicleboss-with-next.vercel.app/checkout/api/booking/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedBooking),
        headers: {
          "content-type": "application/json",
        },
      },
    );
    if (resp.status === 200) {
      toast.success("Updated Successfully");
    }
  };

  useEffect(() => {
    const loadBooking = async () => {
      try {
        const resp = await fetch(
          `https://vehicleboss-with-next.vercel.app/checkout/api/booking/${id}`,
        );
        const result = await resp.json();
        setBooking(result.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    if (id) {
      loadBooking();
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
            Update Booking
          </h1>
        </div>
      </div>

      <div className="my-8 sm:my-12 bg-slate-200 rounded-xl p-4 sm:p-6 md:p-10 lg:p-12">
        <form onSubmit={handleUpdateBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
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
                <span className="label-text text-black">Date</span>
              </label>
              <input
                defaultValue={date}
                type="date"
                name="date"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
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
                <span className="label-text text-black">Due amount</span>
              </label>
              <input
                defaultValue={price}
                readOnly
                type="text"
                name="price"
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Phone</span>
              </label>
              <input
                defaultValue={phone}
                required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">
                <span className="label-text text-black">Present Address</span>
              </label>
              <input
                defaultValue={address}
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
              value="Update Booking"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
