import { prisma } from "@/lib/prisma";
import Link from "next/link";
import CommentArea from "@/component/CommentArea";

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });

  return (
    <div>
      <div className="p-4 pb-0 text-right">
        <Link href="/create" className="text-blue-500 underline">
          Create Post
        </Link>
      </div>
      <ul>
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              className="border overflow-hidden m-4 rounded-lg bg-slate-300"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold py-1 px-4">{post.title}</h4>
                <Link
                  href={`/edit/${post.id}`}
                  className="text-blue-500 inline-block mr-2"
                >
                  [Edit]
                </Link>
              </div>
              <p className="p-4 bg-slate-200">{post.content}</p>
              <CommentArea post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
