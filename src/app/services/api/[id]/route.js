import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, context) => {
  const params = await context.params;

  const db = await connectDB();
  const servicesCollection = db.collection("services");

  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: "Invalid ID" });
    }

    const service = await servicesCollection.findOne({
      _id: new ObjectId(params.id),
    });

    return NextResponse.json({ service });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Something went wrong" });
  }
};
