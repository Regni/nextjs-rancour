import { NextResponse } from "next/server";
import { getRoster } from "@/lib/raiderio/getRoster";

export async function GET() {
  try {
    const roster = await getRoster();
    return NextResponse.json(roster);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
