// src/app/posts/[id]/page.tsx
import { notFound } from "next/navigation";
import ImageGridModal from '@/components/ImageGridModal'; 
import { Post, InformationParams } from '@/types/info'; 
import Link from "next/link";
// Remova esta importação, ela é desnecessária e pode causar conflito ou confusão
// import { url } from "inspector"; 

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

  // Desestruture 'url' junto com as outras propriedades
  const { title, content, imageUrl, url } = postData; 

  return (
    <article>
      <h1 className="text-sky-700 text-4xl font-bold py-6">{title}</h1>
      
      {imageUrl && imageUrl.length > 0 && (
        <ImageGridModal images={imageUrl} title={title} />
      )}

      {/* Condicionalmente renderiza o link se 'url' existir */}
      {url && (
        <div className="my-10"> {/* Adicionei uma margem para espaçamento */}
          <Link 
            href={url} 
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Recomendado para links com target="_blank" por segurança
            className="text-white hover:text-blue-500 font-semibold text-2xl bg-blue-500 hover:bg-white p-3 rounded-2xl" // Estilo para o link
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