import { gql, useQuery } from '@apollo/client'
import { useParams } from 'next/navigation'

const GET_POST_BY_ID = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
      content
      imageUrl
    }
  }
`

export default function PostPage() {
  const { id } = useParams()
  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: { id },
  })

  if (loading) return <p>Carregando post...</p>
  if (error) return <p>Erro ao carregar post: {error.message}</p>

  const post = data?.post

  if (!post) return <p>Post não encontrado.</p>

  return (
    <article>
      <h1>{post.title}</h1>
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <p>{post.content}</p>
    </article>
  )
}
