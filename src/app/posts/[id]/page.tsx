// src/app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from 'next/image';
import { Post, InformationParams } from '@/types/info'; // <-- AGORA IMPORTA 'Post' E 'InformationParams'

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
      
      {imageUrl && imageUrl.length > 0 && (
        <div className="flex flex-wrap gap-6 mb-8 justify-center">
          {imageUrl.map((url: string, index: number) => (
            <Image
              key={`${id}-${index}`}
              src={url}
              alt={`${title} imagem ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              unoptimized={true}
            />
          ))}
        </div>
      )}

      <div
        className="prose max-w-none text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}