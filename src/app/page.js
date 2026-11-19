import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function HomePage() {
  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });

  return (
    <div>
      <Link href="/create" className="text-blue-500 underline">
        Create Post
      </Link>
      <ul>
        {posts.map((post) => {
          return (
            <li
              key={post.id}
              className="border overflow-hidden m-4 rounded-lg bg-slate-300"
            >
              <h4 className="text-lg font-bold py-1 px-4">{post.title}</h4>
              <p className="p-4 bg-slate-200">{post.content}</p>
              <div>{JSON.stringify(post.comments)}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
