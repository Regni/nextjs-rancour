import { NextResponse } from "next/server";
import { getRoster } from "@/lib/raiderio/getRoster";
import {
  getCurrentSeason,
  getCurrentWeek,
} from "@/lib/raiderio/getCurrentWeek";

export async function GET() {
  try {
    const currentSeasonData = await getCurrentWeek();
    return NextResponse.json(currentSeasonData);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
