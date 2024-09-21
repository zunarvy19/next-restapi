// import next req and res
import { NextResponse } from "next/server";

// import prisma client
import prisma from "../../../../../prisma/client";

// get data
export async function GET(request, { params }) {
  // get params id
  const id = parseInt(params.id);

  // get detail post
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    // return response json
    return NextResponse.json(
      {
        sucess: true,
        message: "Tidak ada data post!",
        data: null,
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      sucess: true,
      message: "Detail data post",
      data: post,
    },
    {
      status: 200,
    }
  );
}

// update data

export async function PATCH(request, { params }) {
  //get id
  const id = parseInt(params.id);

  // req data
  const { title, content } = await request.json();

  // update data
  const post = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title: title,
      content: content,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Data berhasil di update!",
      data: post,
    },
    {
      status: 200,
    }
  );
}
