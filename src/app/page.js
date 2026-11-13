import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const posts = await prisma.post.findMany({});

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className="border-b">
            <h4 className="text-lg font-bold">{post.title}</h4>
            <p className="bg-slate-200 p-4 rounded">{post.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
