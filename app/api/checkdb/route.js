import { dbConnect, disconnect } from "@/app/lib/db";
import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/db";
export async function POST() {
  try {
    // Connect to the database
    const con = await clientPromise;

    // Query the database to retrieve data
    const db = con.db("sample_mflix");
    const collection = db.collection('codes');
    const data = await collection.find().toArray(); // Retrieve all documents in the collection
    if (data.length === 0) {
      return NextResponse.json({ _id: null });
    }
    const randomElement = Math.floor(Math.random() * data.length);
    const selectedCode = data[randomElement];
    // Log the retrieved data
    console.log("Retrieved data:", data);
    await collection.deleteOne({ _id: selectedCode._id });

    return NextResponse.json(selectedCode);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error(error);
  }
}
