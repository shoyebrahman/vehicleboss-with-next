"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Page = () => {
  const session = useSession();
  const [bookings, setBooking] = useState([]);
  // const loadData = async () => {
  //   const resp = await fetch(
  //     `https://vehicleboss-with-next.vercel.app/mybookings/api/${session?.data?.user?.email}`,
  //   );
  //   const data = await resp.json();
  //   setBooking(data?.mybookings);
  // };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://vehicleboss-with-next.vercel.app/checkout/api/booking/${id}`,
        {
          method: "DELETE",
        },
      );

      const resp = await res.json();

      if (res.ok) {
        toast.success("Booking deleted successfully");

        setBooking((prev) => prev.filter((item) => item._id !== id));
      } else {
        toast.error("Failed to delete from database");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (session?.data?.user?.email) {
      const loadData = async () => {
        const resp = await fetch(
          `https://vehicleboss-with-next.vercel.app/mybookings/api/${session?.data?.user?.email}`,
        );
        const data = await resp.json();
        setBooking(data?.mybookings);
      };

      loadData();
    }
  }, [session?.data?.user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ToastContainer />

      <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden">
        <Image
          className="absolute w-full h-full object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-8">
            My Bookings
          </h1>
        </div>
      </div>

      {/* for Desktop Table */}
      <div className="hidden md:block mt-10">
        <div className="overflow-x-auto rounded-xl">
          <table className="table w-full">
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bookings?.map(({ serviceTitle, _id, date, price }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{serviceTitle}</td>
                  <td>{price}</td>
                  <td>{date}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Link href={`/mybookings/update/${_id}`}>
                        <button className="btn btn-sm btn-primary">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* only for mobile user  */}
      <div className="md:hidden mt-8 space-y-4">
        {bookings?.map(({ serviceTitle, _id, date, price }, index) => (
          <div
            key={_id}
            className="bg-white shadow-md rounded-xl p-4 space-y-2"
          >
            <p className="font-semibold text-lg">
              {index + 1}. {serviceTitle}
            </p>

            <p className="text-sm">
              <span className="font-medium">Price:</span> {price}
            </p>

            <p className="text-sm">
              <span className="font-medium">Date:</span> {date}
            </p>

            <div className="flex gap-2 pt-2">
              <Link href={`/mybookings/update/${_id}`} className="flex-1">
                <button className="btn btn-primary w-full btn-sm">Edit</button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error w-full btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
