//src/app/page.tsx


'use client'

import { gql, useQuery } from '@apollo/client'
import client from '@/lib/apolloClient'
import me from '../../public/images/Leandro.jpg'

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
    }
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(GET_POSTS)

  if (loading) return <p>Carregando posts...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <main className='flex-grow'>
      <img src="/images/Leandro.jpg" alt="Leandro" className='w-30 rounded-full border-2'/>
      <h1>Blog com GraphQL + Next.js</h1>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

