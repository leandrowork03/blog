// src/app/page.tsx
"use client";

import { gql, useQuery } from "@apollo/client";
import client from "@/lib/apolloClient";
import Image from "next/image"; 
import Link from "next/link";
import { Post } from "@/types/info";
import { TechStack } from "./components/techs"; 

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      imageUrl
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery<{ posts: Post[] }>(GET_POSTS, {
    client,
  });

  if (loading) return <p>Carregando posts...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  if (!data || !data.posts) return null;

  return (
    <div>
      <header className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col justify-center items-center">
        
          <Image
            src="/images/Leandro.jpg"
            alt="Leandro"
            width={120} 
            height={120}
            className="w-30 rounded-full border-2 border-white" 
          />
        </div>
        <div>
          <h1 className="font-black text-2xl md:text-4xl">
           Leandro Santos 
          </h1>
        <p className="text-green-500 font-black">Desenvolvedor Front-End</p>
        </div>
      </header>

      <section className="bg-black/90 p-5 rounded mt-10 mb-8">
        <h1 className="text-sky-700 text-2xl py-3">Sobre mim</h1>
        <p>
          Sou Leandro, desenvolvedor web focado em transformar ideias em
          soluções digitais com propósito. Atuo principalmente no front-end com
          HTML, CSS, JavaScript, React e Next.js, criando interfaces modernas,
          funcionais e de alta performance. Também desenvolvo no back-end com
          Node.js, Supabase, MySQL e estou aprofundando meus conhecimentos em
          GraphQL, buscando sempre entregar soluções completas e bem
          estruturadas. Meu estilo de aprendizado é profundo: gosto de entender
          o "porquê" das coisas, explorar limites e refatorar até alcançar
          clareza e eficiência. Fora do universo do código, sou um entusiasta de
          rock, metal, punk, thrash e classic rock – gêneros que refletem minha
          preferência por autenticidade e uma abordagem direta. Essa mesma
          mentalidade guia meu trabalho: foco, sinceridade e resolução de
          problemas com objetividade. Acredito que a tecnologia vai além das
          linhas de código, impactando diretamente a vida real e os dilemas
          humanos. Histórias de jogos como Mega Man X me inspiram a pensar sobre o futuro
          e o significado por trás de cada criação. Assim, cada projeto que
          desenvolvo não é apenas um conjunto de algoritmos, mas uma extensão da
          minha visão de mundo.
        </p>
      </section>
      <section className="my-3 bg-black/80 p-4">
        <h1 className="text-3xl font-bold text-blue-600">Tecnologias usadas neste blog</h1>
        <p className="text-2xl font-bold">Next.JS, React, TypeScript, GraphQL, GraphQL Yoga, Apollo Client, Tailwind</p>
      </section>

      <section>
        <h2 className="text-sky-700 text-3xl font-bold py-6">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              
              className="block bg-black/90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {post.imageUrl && post.imageUrl.length > 0 && (
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={post.imageUrl[0]}
                    alt={post.title}
                    fill
                  
                    className="object-cover transition-transform duration-300 group-hover:scale-127"
                   
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-black/80 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white  text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver Mais
                    </span>
                  </div>
                </div>
              )}
              <div className="p-1">
                <h3 className="text-xl font-semibold mb-2 text-zinc-600 group-hover:text-sky-400 transition-colors duration-300 pl-4">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div>
         
          <TechStack/> 
        </div>
      </section>
    </div>
  );
}
