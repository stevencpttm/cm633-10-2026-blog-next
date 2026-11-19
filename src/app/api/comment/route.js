import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const body = await request.json();

  if (!body.postId || !body.content) {
    return Response.json({
      success: false,
    });
  }

  const comment = await prisma.comment.create({
    data: {
      postId: body.postId,
      content: body.content,
      createdAt: new Date(),
    },
  });

  return Response.json(comment);
}
