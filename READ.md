# Blog Next.js + GraphQL - Documentação Resumida

## Tecnologias usadas

- Next.js (App Router, TypeScript)  
- GraphQL (graphql-yoga)  
- Apollo Client (frontend)  
- React (hooks e componentes)  
- Next.js Image para imagens  
- Imagens estáticas na pasta `public`  

---

## Pacotes instalados

```bash
npm install graphql graphql-yoga @apollo/client


/blog
  /src
    /app
      /api
        /graphql
          route.ts             # Rota API GraphQL (backend)
      /providers.tsx           # ApolloProvider para envolver app
      /layout.tsx              # Layout global envolvendo Providers
      /page.tsx                # Página inicial consumindo GraphQL
    /lib
      apolloClient.ts          # Configuração Apollo Client
      schema.ts                # Schema e resolvers GraphQL (mock)
  /public
    /images
      post1.jpg               # Imagens usadas nos posts
      post2.jpg
  package.json
  tsconfig.json
  next.config.js (opcional)
