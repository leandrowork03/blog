//src/types/info.ts

export interface Information {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

export type InformationParams = {
  params: {
    id: string;
  };
};

