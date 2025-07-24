// src/app/page.tsx
'use client'

import { gql, useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/types/info';

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      imageUrl
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery<{ posts: Post[] }>(GET_POSTS, { client });

  if (loading) return <p>Carregando posts...</p>
  if (error) return <p>Erro: {error.message}</p>

  if (!data || !data.posts) return null;

  return (
    <div>
      <header className='flex flex-col md:flex-row items-center gap-10'>
        <div className='flex flex-col justify-center items-center'>
          <img src="/images/Leandro.jpg" alt="Leandro" className='w-30 rounded-full border-2' />
          <h1>Leandro</h1>
        </div>
        <h1 className='font-black text-2xl md:text-4xl'>Entre Códigos e Pensamentos</h1>
      </header>

      <section className='bg-black/90 p-5 rounded mb-8'>
        <h1 className='text-sky-700 text-2xl py-3'>Sobre mim</h1>
        <p>
          Sou Leandro, um desenvolvedor web apaixonado por transformar ideias em soluções digitais com propósito. Minha principal expertise reside no desenvolvimento front-end, com foco em React e Next.js, onde encontro a oportunidade de construir interfaces intuitivas e de alta performance.

          Minha abordagem ao aprendizado e ao trabalho é pautada pela profundidade: busco compreender verdadeiramente cada conceito, testar limites e refatorar para otimização. Essa dedicação me levou a explorar diversas tecnologias, incluindo Java, PHP, Supabase e MySQL, e atualmente estou aprofundando meus conhecimentos em GraphQL e Node.js. Meu compromisso é contínuo com a evolução e a entrega de projetos funcionais, com lógica limpa e arquitetura robusta.

          Fora do universo do código, sou um entusiasta de rock, metal, punk, thrash e classic rock – gêneros que refletem minha preferência por autenticidade e uma abordagem direta. Essa mesma mentalidade se traduz na minha forma de trabalhar: prezo pela sinceridade e objetividade, focando na resolução de problemas de forma eficiente.

          Acredito que a tecnologia vai além das linhas de código, impactando diretamente a vida real e os dilemas humanos. Projetos como &quot;Mega Man X&quot; me inspiram a pensar sobre o futuro e o significado por trás de cada criação. Assim, cada projeto que desenvolvo não é apenas um conjunto de algoritmos, mas uma extensão da minha visão de mundo.

          Meu objetivo é claro: aliar minha paixão à minha profissão, desenvolvendo soluções úteis e inovadoras. Estou em constante busca pela minha melhor versão, tanto como desenvolvedor quanto como indivíduo, sempre disposto a aprender, recomeçar e dedicar horas para alcançar a excelência.
        </p>
      </section>

      <section>
        <h2 className="text-sky-700 text-3xl font-bold py-6">Meus Projetos e Artigos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.posts.map((post: Post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              // Adicionando 'group' aqui para que os elementos internos reajam ao hover do pai
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {post.imageUrl && post.imageUrl.length > 0 && (
                <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={post.imageUrl[0]}
                    alt={post.title}
                    fill
                    // Adicionando 'transition-transform duration-300 group-hover:scale-105'
                    // Isso faz com que a imagem tenha uma transição suave e um zoom ao passar o mouse sobre o 'group' pai
                    className="object-cover transition-transform duration-300 group-hover:scale-127"
                    unoptimized={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay sutil ao passar o mouse */}
                  <div className="absolute inset-0 bg-black/60 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white  text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver Mais</span>
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
      </section>
    </div>
  )
}