import { notFound } from "next/navigation";
import Image from 'next/image'; // Importar o componente Image do Next.js

// Define os tipos padrão já com Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage(props: PageProps) {
  // Resolve o promise antes de usar
  const { id } = await props.params;

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

  if (!data?.post) return notFound();

  const { title, content, imageUrl } = data.post;

  return (
    <article>
      <h1 className="text-sky-700 text-4xl font-bold py-6">{title}</h1> {/* Adicionei algumas classes para combinar com o visual */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={800} // Ajuste a largura conforme sua necessidade
          height={500} // Ajuste a altura conforme sua necessidade
          className="rounded-lg mb-6" // Adicionei algumas classes de estilo
          unoptimized={true} // Use unoptimized se as imagens forem locais e você não quiser a otimização padrão do Next.js
        />
      )}
      {/* AQUI ESTÁ A MUDANÇA PRINCIPAL: usando dangerouslySetInnerHTML */}
      <div
        className="prose max-w-none text-white" // Mantenha as classes do Tailwind CSS se você usa @tailwindcss/typography
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}