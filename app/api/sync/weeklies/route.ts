import { NextResponse } from "next/server";

import { syncWeeklies } from "@/lib/raiderio/getWeeklies";

export async function POST() {
  try {
    await syncWeeklies();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
