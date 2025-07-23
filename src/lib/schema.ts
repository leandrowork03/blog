// src/lib/schema.ts
import { createSchema } from 'graphql-yoga'

export const schema = createSchema({
  typeDefs: `
  type Post {
    id: ID!
    title: String!
    content: String!
    imageUrl: String
  }

  type Query {
    posts: [Post!]!
    post(id: ID!): Post
  }
`,
resolvers: {
  Query: {
    posts: () => [
      {
        id: '1',
        title: 'Primeiro Post',
        content: 'Conteúdo do primeiro post',
        imageUrl: '/images/post1.jpg', // imagem local
      },
      {
        id: '2',
        title: 'Segundo Post',
        content: 'Conteúdo do segundo post',
        imageUrl: '/images/post2.jpg',
      },
    ],
    post: (_, { id }) => {
      const posts = [
        {
          id: '1',
          title: 'Primeiro Post',
          content: 'Conteúdo do primeiro post',
          imageUrl: '/images/post1.jpg',
        },
        {
          id: '2',
          title: 'Segundo Post',
          content: 'Conteúdo do segundo post',
          imageUrl: '/images/post2.jpg',
        },
      ];
      return posts.find((post) => post.id === id);
    },
  },
},
})

