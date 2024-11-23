/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const pages = await prisma.pages.findMany();
  return NextResponse.json(pages);
}

export async function POST(request: NextRequest) {
  const { slug, title, content } = await request.json();
  const newPage = await prisma.pages.create({
    data: { slug, title, content },
  });
  return NextResponse.json(newPage);
}

export async function PUT(request: NextRequest) {
  const { id, slug, title, content } = await request.json();
  const updatedPage = await prisma.pages.update({
    where: { id },
    data: { slug, title, content },
  });
  return NextResponse.json(updatedPage);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  await prisma.pages.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Page deleted" });
}



