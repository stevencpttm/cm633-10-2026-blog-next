import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const posts = await prisma.post.findMany({ orderBy: { id: "desc" } });
  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}
