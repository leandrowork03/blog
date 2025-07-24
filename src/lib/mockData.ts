// src/lib/mockData.ts
export const mockPosts = [
  {
    id: '1',
    title: 'Animes Hype Z',
    content: `<h1 class="text-sky-700 text-4xl font-bold py-6">
AnimeHypez: Uma Plataforma Interativa para Fãs de Anime
</h1>
<p>
O <strong>AnimeHypez</strong> é mais do que um simples site; é uma aplicação web completa e interativa,
cuidadosamente desenvolvida para atender às necessidades dos entusiastas de anime. Projetado com uma
interface intuitiva e funcionalidades robustas, ele oferece aos usuários um ambiente personalizado
para explorar, organizar e gerenciar seus títulos favoritos de forma eficiente e segura.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Autenticação e Segurança do Usuário
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Sistema de Autenticação Robusto
</h3>
<p>
A plataforma incorpora um sistema de registro e login seguro, implementado com <strong>Firebase</strong>.
Isso garante que todas as informações de conta dos usuários sejam protegidas através de métodos de autenticação confiáveis.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Rotas Protegidas e Controle de Acesso
</h3>
<p>
Para manter a integridade dos dados e a privacidade individual, o aplicativo dispõe de um mecanismo de controle de acesso.
Isso assegura que áreas sensíveis da aplicação sejam acessíveis apenas por usuários devidamente autenticados,
proporcionando um ambiente de navegação seguro.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Exploração e Gerenciamento de Conteúdo
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Sistema de Busca Abrangente
</h3>
<p>
Os usuários podem pesquisar e explorar uma vasta coleção de títulos de anime.
O sistema de busca é otimizado para facilitar a descoberta de novas obras e o reencontro com clássicos.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Gerenciamento de Favoritos Personalizado
</h3>
<p>
Uma funcionalidade chave é a capacidade de criar e manter uma lista personalizada de animes favoritos.
Em <strong>AnimeHypez</strong>, essa funcionalidade permite aos usuários salvar e acessar rapidamente suas séries e filmes preferidos.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Personalização e Experiência do Usuário
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Perfil de Usuário Editável
</h3>
<p>
Cada usuário tem a liberdade de personalizar seu próprio perfil. Isso inclui a opção de fazer upload de um avatar
customizado ou selecionar um dentre as opções disponíveis, além de escrever uma biografia exclusiva.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Validação de Formulários e Feedback
</h3>
<p>
A integridade dos dados inseridos e uma experiência de usuário sem atritos são garantidas por uma validação de
formulários eficaz, utilizando as bibliotecas <strong>React Hook Form</strong> e <strong>Zod</strong>.
Além disso, o <strong>React Hot Toast</strong> é empregado para fornecer notificações e mensagens de feedback de forma elegante,
melhorando a comunicação e a usabilidade.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Arquitetura e Tecnologia
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Persistência de Dados com Firestore
</h3>
<p>
Todos os dados da aplicação, desde informações de perfil até as listas de favoritos, são armazenados de forma confiável
no <strong>Firestore</strong>, um banco de dados NoSQL do Google Firebase. Isso garante que as informações estejam
sempre disponíveis e seguras.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Gerenciamento de Estado Global
</h3>
<p>
Para uma gestão eficiente dos dados e evitar o "prop drilling" (passagem excessiva de props entre componentes),
a aplicação utiliza a <strong>Context API</strong> do React. Essa abordagem otimiza o acesso a informações globais,
como dados de autenticação e detalhes de animes.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Interface Responsiva com Tailwind CSS
</h3>
<p>
O design da aplicação é inteiramente construído com <strong>Tailwind CSS</strong>, resultando em uma interface moderna,
limpa e, o mais importante, totalmente responsiva. Isso significa que o AnimeHypez oferece uma experiência de
usuário consistente e agradável em qualquer dispositivo e tamanho de tela.
</p>
`,
    imageUrl: ['/images/cap1.png', '/images/cap12.png', '/images/cap13.png', '/images/cap14.png', '/images/cap15.png']
  },
  {
    id: '2',
    title: 'Segundo Post',
    content: 'Conteúdo do segundo post',
    imageUrl: ['/images/post2.jpg'], // Corrigido para ser uma array, como no schema
  },
];

