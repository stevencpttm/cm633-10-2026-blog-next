"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function editPost(formData) {
  await prisma.post.update({
    data: {
      title: formData.get("title"),
      content: formData.get("content"),
      username: "Guest",
      createdAt: new Date(),
    },
    where: {
      id: Number(formData.get("postId")),
    },
  });

  revalidatePath("/edit/" + formData.get("postId"));
  revalidatePath("/");
  return redirect("/");
}
