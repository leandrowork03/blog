// src/app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import ImageGridModal from '@/components/ImageGridModal'; 
import { Post, InformationParams } from '@/types/info'; 
import Link from "next/link";



export default async function PostPage({ params }: InformationParams) {
  const { id } = params;

 
  const apiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL || "http://localhost:3000/api/graphql";

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query Post($id: ID!) {
          post(id: $id) {
            id
            title
            url 
            content
            imageUrl
          }
        }
      `,
      variables: { id },
    }),
    cache: "no-store",
  });

  const { data, errors } = await res.json(); 

  if (errors) {
    console.error("Erro na query GraphQL:", errors);
    
    return <p>Erro ao carregar o post. Tente novamente mais tarde.</p>;
  }

  const postData: Post = data?.post; 

  if (!postData) {
    console.log(`Post com ID ${id} não encontrado.`);
    return notFound();
  }


  const { title, content, imageUrl, url } = postData; 

 
  return (
    <article className="prose max-w-none text-white bg-black p-4 rounded-lg shadow-lg">
      <h1 className="text-sky-700 text-4xl font-bold py-6">{title}</h1>
      
     
      {imageUrl && imageUrl.length > 0 && (
        <ImageGridModal images={imageUrl} title={title} />
      )}

      
      {url && (
        <div className="my-10 text-center">
          <Link 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md" 
          >
            Ver o Deploy do Projeto!
          </Link>
        </div>
      )}

   
      <div
        className="mt-8 text-gray-200 leading-relaxed" 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}