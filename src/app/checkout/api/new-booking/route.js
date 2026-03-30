import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const newBooking = await bookingsCollection.insertOne(booking);
    return NextResponse.json({ message: "service booked successfully" });
  } catch (error) {
    console.log(error);
  }
};
