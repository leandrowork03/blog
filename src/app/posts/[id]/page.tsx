// src/app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import ImageGridModal from '@/components/ImageGridModal'; // <-- Importe o novo componente
import { Post, InformationParams } from '@/types/info'; 

export default async function PostPage({ params }: InformationParams) {
  const { id } = params;

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
      variables: { id },
    }),
    cache: "no-store",
  });

  const { data } = await res.json();

  const postData: Post = data?.post; 

  if (!postData) return notFound();

  const { title, content, imageUrl } = postData;

  return (
    <article>
      <h1 className="text-sky-700 text-4xl font-bold py-6">{title}</h1>
      
      {/* Use o novo componente ImageGridModal aqui */}
      {imageUrl && imageUrl.length > 0 && (
        <ImageGridModal images={imageUrl} title={title} />
      )}

      <div
        className="prose max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}