// import next req and res
import { NextRequest, NextResponse } from "next/server";

// import prisma client
import prisma from "../../../../prisma/client";

export async function GET() {
  // get all of posts
  const posts = await prisma.post.findMany();

  // return response with json
  return NextResponse.json(
    {
      success: true,
      message: "List Data Posts",
      data: posts,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request) {
  // get requests
  const { title, content } = await request.json();

  // create data
  const post = await prisma.post.create({
    data: {
      title: title,
      content: content,
    },
  });
  // return response json
  return NextResponse.json(
    {
      success: true,
      message: "Post Created Successfully",
      data: post,
    },
    {
      status: 201,
    }
  );
}
