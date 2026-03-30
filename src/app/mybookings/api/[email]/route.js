import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  const params = await context.params;

  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const mybookings = await bookingsCollection
      .find({
        email: params.email,
      })
      .toArray();

    return NextResponse.json({ mybookings });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};
