import { notFound } from "next/navigation";
import { editPost } from "./actions";
import { prisma } from "@/lib/prisma";

export default async function ({ params }) {
  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div className="p-4">
      <h2 className="text-3xl border-b border-slate-300 pb-4 mb-4">
        Edit Post (ID: {id})
      </h2>
      <form action={editPost} key={Math.random()}>
        <label className="block border-b border-slate-200 pb-4 mb-4">
          <strong>Title</strong>
          <input
            type="text"
            name="title"
            className="w-full p-2 bg-slate-200 rounded"
            defaultValue={post.title}
          />
        </label>
        <label className="block border-b border-slate-200 pb-4 mb-4">
          <strong>Content</strong>
          <textarea
            type="text"
            name="content"
            className="w-full p-2 bg-slate-200 rounded min-h-32"
            defaultValue={post.content}
          />
        </label>
        <input type="hidden" name="postId" value={post.id} />
        <button
          type="submit"
          className="px-4 py-2 bg-slate-600 text-white rounded"
        >
          Edit
        </button>
      </form>
    </div>
  );
}
