import { NextResponse } from "next/server";
import { getCurrentWeek } from "@/lib/raiderio/getCurrentWeek";
import { syncWeeklies } from "@/lib/raiderio/getWeeklies";

export async function GET() {
  try {
    const roster = await syncWeeklies();
    return NextResponse.json(roster);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
