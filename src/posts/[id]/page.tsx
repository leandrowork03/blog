// src/posts/[id]/components/page.tsx
'use client'

import { gql, useQuery } from '@apollo/client'
import { Information } from '@/types/info'

const GET_POST_BY_ID = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      imageUrl
    }
  }
`

export function PostInfo({ id }: { id: string }) {
  const { data, loading, error } = useQuery<{ post: Information }>(GET_POST_BY_ID, {
    variables: { id },
  })

  if (loading) return <p>Carregando post...</p>
  if (error) return <p>Erro: {error.message}</p>
  if (!data?.post) return <p>Post não encontrado.</p>

  const { title, content, imageUrl } = data.post

  return (
    <div>
      <h1>{title}</h1>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <p>{content}</p>
    </div>
  )
}
