import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, context) => {
  const params = await context.params;

  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "Invalid ID" });
    }

    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

    return Response.json({ message: "deleted the bookings", resp });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};
export const PATCH = async (request, context) => {
  const params = await context.params;

  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updateDoc = await request.json();

  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "Invalid ID" });
    }

    const resp = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          ...updateDoc,
        },
      },
      {
        upsert: true,
      },
    );

    return NextResponse.json({ message: "update the bookings", data: resp });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};

export const GET = async (request, context) => {
  const params = await context.params;

  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });

    return NextResponse.json({ message: "booking found", data: resp });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};
