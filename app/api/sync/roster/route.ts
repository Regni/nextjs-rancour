import { NextResponse } from "next/server";
import { syncRosterDB } from "@/lib/raiderio/getRoster";

export async function POST() {
  try {
    await syncRosterDB();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
