// src/types/info.ts

// Renomeado para 'Post' para consistência com o schema GraphQL
export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string[]; // Confirmando que é uma array de strings, e opcional
}

export type InformationParams = {
  params: {
    id: string;
  };
};