import { dbConnect, disconnect } from "@/app/lib/db";
import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/db";
export async function GET() {
  try {
    // Connect to the database
    const con = await clientPromise;

    // Query the database to retrieve data
    const db = con.db("sample_mflix");
    const collection = db.collection('codes');
    const data = await collection.find().toArray(); // Retrieve all documents in the collection

    // Log the retrieved data
    console.log("Retrieved data:", data);

    // Disconnect from the database
    // Return a response indicating successful retrieval
    return new NextResponse("Data retrieved and logged successfully");
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.error(error);
  }
}
