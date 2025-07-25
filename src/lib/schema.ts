// src/lib/schema.ts
import { createSchema } from 'graphql-yoga'
import { mockPosts } from './mockData';

export const schema = createSchema({
  typeDefs: `
    type Post {
      id: ID!
      title: String!
      url: String!
      content: String!
      imageUrl: [String]
    }

    type Query {
      posts: [Post!]!
      post(id: ID!): Post
    }
  `,
  resolvers: {
    Query: {
      posts: () => mockPosts,
      post: (_, { id }) => {
        return mockPosts.find((post) => post.id === id);
      },
    },
  },
})

