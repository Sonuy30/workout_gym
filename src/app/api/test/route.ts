import { NextResponse } from "next/server";
import { getDatabase } from "../../../dbconfig/dbconfig";

export async function GET() {
  try {
    const db = await getDatabase("your-database-name");

    // Example: Fetch data from a collection
    const data = await db.collection("your-collection-name").find({}).toArray();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
