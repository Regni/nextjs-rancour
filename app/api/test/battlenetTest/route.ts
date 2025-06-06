// app/api/battlenet-characters/route.ts
import { auth } from "@/auth";
import type { Session } from "next-auth";

interface ExtendedSession extends Session {
  accessToken?: string;
}

export async function GET() {
  const session = (await auth()) as ExtendedSession;
  const accessToken = session?.accessToken;

  if (!accessToken) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const response = await fetch("https://eu.api.blizzard.com/profile/user/wow", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Battlenet-Namespace": "profile-eu",
    },
  });

  // Check if response is OK and content is not empty
  if (!response.ok) {
    const text = await response.text();
    console.log("Blizzard API error:", response);
    return new Response(
      JSON.stringify({
        error: `Blizzard API error: ${response.status}`,
        message: text,
      }),
      { status: response.status }
    );
  }
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
