import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    await servicesCollection.deleteMany();
    const resp = await servicesCollection.insertMany(services);
    return NextResponse.json({ message: "uploaded successfully" });
  } catch (error) {
    console.log(error);
  }
};
