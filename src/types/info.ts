// src/types/info.ts
export interface Post {
  id: string;
  title: string;
  url: string;
  content: string;
  imageUrl?: string[];
}

export type InformationParams = {
  params: {
    id: string;
  };
};

