import { NextResponse } from "next/server";
import { formSchema } from "@/lib/schemas/applicationZodSchema";
import { createApplication } from "@/lib/db/applications";

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    const allowedOrigin = process.env.ALLOWED_ORIGIN as string;
    console.log("Origin:", origin, "Allowed Origin:", allowedOrigin);
    if (!origin?.startsWith(allowedOrigin)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json();

    if (body.botcheck) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    const parsed = formSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const { botcheck, ...dbData } = parsed.data;

    const result = await createApplication(dbData);

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
