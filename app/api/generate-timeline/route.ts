import { generateTimeline } from "@/lib/generate-timeline";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId, summary, title, languages, tools } = await request.json();

  try {
    await generateTimeline(summary, title, languages, tools, userId);
    return NextResponse.json({ success: "Timeline generated" });
  } catch (e) {
    console.error("Error generating timeline: ", e);
    return NextResponse.json({ error: "Error generating timeline" });
  }
}
