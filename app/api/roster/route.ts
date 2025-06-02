import { getRosterDB } from "@/lib/raiderio/getRoster";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const roster = await getRosterDB();
    return NextResponse.json(roster);
  } catch (error) {
    console.error("Error fetching roster:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
