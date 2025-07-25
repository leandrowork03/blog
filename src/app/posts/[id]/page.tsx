// src/app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import ImageGridModal from '@/components/ImageGridModal'; 
import { Post, InformationParams } from '@/types/info'; 
import Link from "next/link";


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
            url # <-- Certifique-se de que 'url' está sendo solicitado aqui
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

  
  const { title, content, imageUrl, url } = postData; 

  return (
    <article>
      <h1 className="text-sky-700 text-4xl font-bold py-6">{title}</h1>
      
      {imageUrl && imageUrl.length > 0 && (
        <ImageGridModal images={imageUrl} title={title} />
      )}

     
      {url && (
        <div className="my-10">
          <Link 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-blue-500 font-semibold text-2xl bg-blue-500 hover:bg-white p-3 rounded-2xl" 
          >
            clique aqui para ver o deploy!
          </Link>
        </div>
      )}

      <div
        className="prose max-w-none text-white bg-black p-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}

