import { NextResponse } from "next/server";
import { fetchInstagramMedia } from "@/lib/instagram";

export async function GET() {
  try {
    if (!process.env.INSTAGRAM_ACCESS_TOKEN) {
      return NextResponse.json(
        { message: "Instagram no configurado", posts: [] },
        { status: 503 },
      );
    }

    const posts = await fetchInstagramMedia(6);
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { message: "No pudimos cargar Instagram" },
      { status: 502 },
    );
  }
}
