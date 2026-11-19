"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createPost(formData) {
  await prisma.post.create({
    data: {
      title: formData.get("title"),
      content: formData.get("content"),
      username: "Guest",
      createdAt: new Date(),
    },
  });

  return redirect("/");
}
