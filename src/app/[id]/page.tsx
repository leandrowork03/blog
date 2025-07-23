//src/app/posts/[id]/page.tsx
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Post($id: ID!) {
          post(id: $id) {
            id
            title
            content
            imageUrl
          }
        }
      `,
      variables: { id: params.id },
    }),
    cache: "no-store",
  });

  const { data } = await res.json();

  if (!data?.post) return notFound();

  const { title, content, imageUrl } = data.post;

  return (
    <article>
      <h1>{title}</h1>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <p>{content}</p>
    </article>
  );
}