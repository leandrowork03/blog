'use client'

import { gql, useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import Image from 'next/image'

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
  const { data, loading, error } = useQuery(GET_POSTS)

  if (loading) return <p>Carregando posts...</p>
  if (error) return <p>Erro: {error.message}</p>

  // Console.log para verificar o URL da imagem
  if (data && data.posts) {
    data.posts.forEach((post: any) => {
      console.log(`Verificando Post ID: ${post.id}, Image URL:`, post.imageUrl);
    });
  }

  return (
    <div>
      <header className='flex flex-col md:flex-row items-center gap-10'>
        <div className='flex flex-col justify-center items-center'>
          <img src="/images/Leandro.jpg" alt="Leandro" className='w-30 rounded-full border-2' />
          <h1>Leandro</h1>
        </div>
        <h1 className='font-black text-2xl md:text-4xl'>Entre Códigos e Pensamentos</h1>
      </header>

      <section className='bg-black/90 p-5 rounded'>
        <h1 className='text-sky-700 text-2xl py-3'>Divagando sobre mim</h1>
        <p>
          Fala, eu sou o Leandro — um apaixonado por programação e por tudo que envolve criar com propósito.
          Meu foco principal hoje é o front-end, especialmente com React e Next.js, onde eu realmente encontrei
          uma forma de me expressar com código. Eu não gosto de fazer as coisas pela metade: se for pra aprender,
          eu quero entender de verdade, testar, refazer, ir até o fim. Já trabalhei com Java, PHP, Supabase, MySQL
          e estou agora explorando GraphQL e Node.js — sempre buscando evoluir e construir projetos reais,
          funcionais e com lógica limpa.

          Além do código, minha vida tem trilha sonora. Sou viciado em rock, metal, punk, thrash, classic rock e
          até um country americano quando bate certo. O som pesado me representa — direto, autêntico, cheio de
          atitude. Isso também define meu jeito: prefiro a sinceridade, vou direto ao ponto, e não curto enrolação.

          Me identifico com histórias que misturam tecnologia e dilemas humanos — como Mega Man X, por exemplo.
          Gosto de pensar sobre o futuro, sobre o impacto da tecnologia na vida real. E por isso, cada projeto que
          eu crio não é só código: é parte da minha visão de mundo.

          Meu objetivo é claro: viver de algo que eu gosto, criar coisas úteis e crescer como desenvolvedor. E eu sei
          que tô no caminho certo, porque não tenho medo de recomeçar, estudar por horas, apagar e refazer — tudo
          em busca da melhor versão de mim mesmo, tanto no código quanto na vida.
        </p>
      </section>
      <Image
        src="/images/cap1.png"
        alt="Teste imagem local"
        width={600}
        height={400}
        unoptimized={true}
        className="rounded mb-4"
      />

      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id} className="my-6 border-b border-gray-600 pb-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={600}
              height={400}
              className="rounded-lg"
            />

            <div
              className="prose max-w-none text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </li>
        ))}
      </ul>

    </div>
  )
}