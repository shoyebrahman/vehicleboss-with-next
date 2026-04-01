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
    <div className="container mx-auto">
      <ToastContainer />
      <div className="relative  h-72">
        {img && (
          <Image
            className="absolute h-72 w-full left-0 top-0 object-cover"
            src={img}
            alt="service"
            width={1920}
            height={1080}
          />
        )}
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Update Booking
          </h1>
        </div>
      </div>
      <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handleUpdateBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                defaultValue={data?.user?.name}
                type="text"
                name="name"
                className="input input-bordered"
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
                className="input input-bordered"
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
                placeholder="email"
                className="input input-bordered"
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
                className="input input-bordered"
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
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Present Address</span>
              </label>
              <input
                defaultValue={address}
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
