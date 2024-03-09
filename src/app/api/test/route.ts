import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");
  const user = await prisma.user.findMany();
  return NextResponse.json({ token, user });
}
