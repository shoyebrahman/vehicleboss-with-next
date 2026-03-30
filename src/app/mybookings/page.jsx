"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Page = () => {
  const session = useSession();
  const [bookings, setBooking] = useState([]);
  const loadData = async () => {
    const resp = await fetch(
      `http://localhost:3000/mybookings/api/${session?.data?.user?.email}`,
    );
    const data = await resp.json();
    setBooking(data?.mybookings);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3000/checkout/api/booking/${id}`,
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
      loadData();
    }
  }, [session?.data?.user?.email]);

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={"/assets/images/about_us/parts.jpg"}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            My Bookings
          </h1>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map(({ serviceTitle, _id, date, price }, index) => (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{serviceTitle}</td>
                  <td>{price}</td>
                  <td>{date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/mybookings/update/${_id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error"
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
    </div>
  );
};

export default Page;
