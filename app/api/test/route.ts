import { NextResponse } from "next/server";
import { getCurrentWeek } from "@/lib/raiderio/getCurrentWeek";
import { getCurrentWeeklies, getWeeklies } from "@/lib/raiderio/getWeeklies";

export async function GET() {
  try {
    const roster = await getCurrentWeeklies();
    return NextResponse.json(roster);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
