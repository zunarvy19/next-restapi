// import next req and res
import { NextRequest, NextResponse } from "next/server";

// import prisma client
import prisma from "../../../../prisma/client";

export async function GET() {
  // get all of posts
  const posts = await prisma.post.findMany;
}

return NextResponse.json(
  {
    sucess: true,
    message: "List Data Posts",
    data: posts,
  },
  {
    status: 200,
  }
);
