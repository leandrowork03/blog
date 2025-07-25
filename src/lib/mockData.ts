import { url } from "inspector";

// src/lib/mockData.ts
export const mockPosts = [
  {
    id: '1',
    title: 'Animes Hype Z',
    url: 'https://animehypez.netlify.app/',
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
    title: 'Meu Portfólio Versão espacial',
    url:'https://devleandrop.netlify.app/',
    content: `<h1 class="text-sky-700 text-4xl font-bold py-6">
Portifólio V3: Uma Jornada Interativa Pela Carreira de um Desenvolvedor Web
</h1>

<p>
O <strong>Portifólio V3</strong> é mais do que um simples currículo online; é uma aplicação web dinâmica e envolvente, cuidadosamente desenvolvida para apresentar a trajetória profissional, habilidades e projetos de um desenvolvedor web com foco em front-end.
Projetado para proporcionar uma experiência de usuário fluida e responsiva, este portfólio destaca a capacidade de criar interfaces modernas e funcionais, convidando visitantes a explorar o trabalho e o universo do desenvolvedor.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Navegação e Estrutura Principal
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Seções Essenciais e Intuitivas
</h3>
<p>
A aplicação é estruturada em seções claras e de fácil acesso, incluindo a página <strong>"Home"</strong> (para uma visão geral), <strong>"Sobre Mim"</strong> (detalhando a jornada e paixões do desenvolvedor), <strong>"Projetos"</strong> (vitrine dos trabalhos desenvolvidos), e <strong>"Contato"</strong> (para facilitar a comunicação).
Essa organização garante que os visitantes encontrem rapidamente as informações que procuram.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Destaque de Habilidades e Tecnologias
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Experiência Front-end Robusta
</h3>
<p>
Com um foco nítido em front-end, o portfólio demonstra proficiência em <strong>React</strong> e <strong>Next.js</strong>, revelando a capacidade de construir aplicações escaláveis e de alta performance.
O uso de <strong>TypeScript</strong> assegura a robustez do código com tipagem estática, enquanto <strong>Tailwind CSS</strong> é empregado para criar interfaces modernas, limpas e altamente responsivas.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Exposição de Projetos
</h3>
<p>
A seção de projetos é o coração do portfólio. Cada projeto é apresentado com detalhes essenciais, incluindo seu título, uma descrição rica que pode conter formatação HTML para uma apresentação mais vívida, e uma galeria de imagens.
As imagens são exibidas em um formato de grade e, ao serem clicadas, abrem em um modal em tamanho ampliado, permitindo uma visualização imersiva do trabalho realizado.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Conectividade e Interatividade
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Integração com GraphQL
</h3>
<p>
Para gerenciar e fornecer os dados de forma eficiente, como a lista de projetos e seus detalhes, o portfólio utiliza <strong>GraphQL</strong>.
Isso permite que a aplicação solicite apenas os dados necessários, otimizando o carregamento e a performance da página.
Os dados são atualmente servidos a partir de um mock de dados, demonstrando a estrutura e a prontidão para integração com APIs reais.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Design e Experiência do Usuário
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Design Responsivo e Moderno
</h3>
<p>
O design da aplicação é inteiramente construído com <strong>Tailwind CSS</strong>, resultando em uma interface moderna, limpa e, o mais importante, totalmente responsiva.
Isso significa que o portfólio oferece uma experiência de usuário consistente e agradável em qualquer dispositivo e tamanho de tela, do desktop ao mobile.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Componentes Interativos
</h3>
<p>
O uso de <strong>Client Components</strong> no Next.js permite a implementação de funcionalidades interativas, como o modal para visualização ampliada de imagens.
Isso enriquece a experiência do usuário e demonstra a capacidade de criar interfaces dinâmicas e engajadoras.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Compromisso e Visão
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Sobre o Desenvolvedor
</h3>
<p>
A seção <strong>"Sobre Mim"</strong> é o espaço onde o desenvolvedor compartilha sua paixão pela programação e seu comprometimento com a criação de soluções significativas.
É um convite para entender a filosofia por trás do código e a busca contínua por evolução e aprendizado em um universo que mescla tecnologia e dilemas humanos.
</p>

<p class="pt-4">
O <strong>Portifólio V3</strong> não é apenas uma coleção de projetos, mas uma representação da dedicação do desenvolvedor em construir aplicações úteis, funcionais e com um código limpo, sempre com a ambição de transformar a paixão por tecnologia em uma carreira sólida e impactante.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Sobre a Nova Versão
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Portfólio V3 Agora é o Antigo
</h3>
<p>
Entendi, Leandro! Então o Portfólio V3 que acabamos de detalhar vai se tornar seu portfólio antigo.
Isso faz todo o sentido, especialmente para desenvolvedores, que estão sempre evoluindo e criando novas versões de seus projetos.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
O Que Isso Significa para Seu Portfólio
</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>Evolução Contínua:</strong> Mostra que você está sempre aprendendo, aprimorando suas habilidades e aplicando novas tecnologias e melhores práticas.</li>
  <li><strong>Histórico de Crescimento:</strong> Permite que recrutadores ou clientes vejam sua trajetória e o quanto você progrediu ao longo do tempo.</li>
  <li><strong>Reflexão e Melhoria:</strong> Olhar para o que você já fez serve como um ótimo ponto de partida para identificar o que pode ser melhorado na próxima versão.</li>
</ul>

`,
    imageUrl: ['/images/p1.png', '/images/p2.png', '/images/p3.png', '/images/p4.png', '/images/p5.png', '/images/p6.png'], // Corrigido para ser uma array, como no schema
  },
  {
    id: '3',
    title: 'Controle financeiro',
    url:'https://controle-de-gastosf.netlify.app/',
    content: `<h1 class="text-sky-700 text-4xl font-bold py-6">
Controle de Gastos: Gestão Financeira Pessoal e Familiar
</h1>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Colaboração e Controle Familiar
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Criação e Gestão de Grupos Familiares
</h3>
<p>
Um dos diferenciais do <strong>Controle de Gastos</strong> é a capacidade de criar grupos com outros usuários, como membros da família.
Ao criar um grupo, o usuário define um nome, uma descrição e um ID único é gerado.
Este ID permite que outros usuários entrem no grupo, possibilitando uma visão geral e colaborativa dos custos e ganhos do núcleo familiar.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Relatórios Detalhados
</h3>
<p>
Para uma análise aprofundada, o sistema gera relatórios de despesas e receitas, tanto a nível individual quanto para os grupos.
Isso oferece insights valiosos sobre os padrões de gastos e ajuda na tomada de decisões financeiras em conjunto.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Usabilidade e Segurança
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Autenticação e Perfil do Usuário
</h3>
<p>
O sistema inclui telas de cadastro e login para gerenciar o acesso dos usuários.
Ao se cadastrar, o usuário informa seu nome, e-mail e cria uma senha segura.
Uma vez autenticado, ele tem total acesso às suas transações, saldo e pode adicionar novas operações.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Informações do Usuário e Personalização
</h3>
<p>
Os usuários podem informar e controlar detalhes como nome, e-mail, salário e despesas específicas (ex: conta de luz, internet, compras),
facilitando a análise e o controle detalhado de suas finanças.
</p>

<h2 class="text-violet-600 text-2xl font-semibold py-4">
Arquitetura e Requisitos Técnicos
</h2>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Tecnologias Principais
</h3>
<p>
O projeto é desenvolvido utilizando <strong>Python</strong> para o backend e a lógica de negócios, e o <strong>SQLite</strong> como banco de dados.
Essa combinação oferece um ambiente de desenvolvimento robusto e um banco de dados leve e eficiente para a persistência de dados,
ideal para aplicações que precisam de agilidade e confiabilidade.
</p>

<h3 class="text-violet-600 text-xl font-semibold py-2">
Requisitos Funcionais Destacados
</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>RF001 e RF002:</strong> Implementação de telas de cadastro e login para controle de acesso seguro.</li>
  <li><strong>RF003:</strong> Exibição de um dashboard inicial com resumo de saldo, total de despesas e total de receitas.</li>
  <li><strong>RF004 e RF005:</strong> Interface completa para adicionar, visualizar e excluir transações, com campos para descrição, data, valor, status de pagamento e configuração de recorrência.</li>
  <li><strong>RF006 e RF007:</strong> Funcionalidades robustas para a criação e entrada em grupos familiares, visando o controle financeiro colaborativo.</li>
</ul>

<p class="pt-4">
O <strong>Controle de Gastos</strong> é uma ferramenta abrangente que visa empoderar indivíduos e famílias no gerenciamento de suas finanças,
combinando funcionalidades essenciais com um foco claro na colaboração e na simplicidade de uso.
</p>
`,
    imageUrl: ['/images/cap3.png', '/images/cap31.png', '/images/cap32.png', '/images/cap33.png'], // Corrigido para ser uma array, como no schema
  },
  {
    id: '4',
    title: 'Liga da Justiça',
    url: 'https://liga-da-justica.vercel.app/',
    content: `<div class="prose max-w-none">
  <h1 class="text-sky-700 text-4xl font-bold mb-4">Liga da Justiça: Uma Aventura Heroica na Web</h1>
  <p>O projeto Liga da Justiça é uma aplicação web interativa, cuidadosamente desenvolvida para imergir os usuários no universo dos maiores heróis da DC Comics. Com um foco em apresentação dinâmica de dados e uma experiência de usuário envolvente, esta plataforma celebra os icônicos membros da Liga da Justiça, permitindo explorar seus detalhes e habilidades de uma forma única e acessível.</p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-8 mb-2">Funcionalidades e Interatividade</h2>
  <h3 class="font-bold text-lg">Catálogo de Heróis Dinâmico</h3>
  <p>A aplicação apresenta um catálogo dos membros da Liga da Justiça, com a capacidade de exibir informações detalhadas sobre cada herói. Isso pode incluir seus nomes, poderes, afiliações e outros atributos relevantes, proporcionando aos fãs uma rica fonte de dados.</p>

  <h3 class="font-bold text-lg mt-4">Visualização Detalhada</h3>
  <p>Ao interagir com um herói específico, o usuário é direcionado para uma página de detalhes onde todas as suas informações são apresentadas de forma organizada. Isso inclui uma galeria de imagens, permitindo visualizar o personagem sob diferentes perspectivas ou em cenas icônicas.</p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-8 mb-2">Arquitetura e Tecnologia</h2>
  <h3 class="font-bold text-lg">Desenvolvimento com React e Next.js</h3>
  <p>Construído com React e potencializado pelo framework Next.js, o projeto garante uma performance otimizada, renderização eficiente e uma estrutura escalável. A escolha dessas tecnologias reflete um compromisso com as melhores práticas de desenvolvimento web moderno.</p>

  <h3 class="font-bold text-lg mt-4">Tipagem Segura com TypeScript</h3>
  <p>A utilização de TypeScript em todo o projeto assegura a robustez do código através da tipagem estática. Isso minimiza erros em tempo de desenvolvimento e melhora a manutenibilidade, resultando em uma aplicação mais estável e confiável.</p>

  <h3 class="font-bold text-lg mt-4">Estilização Moderna com Tailwind CSS</h3>
  <p>O design da interface é totalmente construído com Tailwind CSS, proporcionando um visual moderno, limpo e, fundamentalmente, responsivo. O Tailwind permite a criação rápida de layouts atraentes que se adaptam perfeitamente a qualquer dispositivo e tamanho de tela.</p>

  <h3 class="font-bold text-lg mt-4">Gerenciamento de Dados com GraphQL</h3>
  <p>A comunicação com os dados dos heróis é realizada através de GraphQL. Esta poderosa tecnologia de consulta de dados permite que a aplicação solicite exatamente o que precisa, otimizando a carga de informações e a velocidade de resposta. Os dados dos heróis são atualmente gerenciados através de mocks de dados, demonstrando a funcionalidade pronta para integração com APIs reais.</p>
</div>

`,
    imageUrl: ['/images/l1.png', '/images/l2.png', '/images/l3.png',], // Corrigido para ser uma array, como no schema
  },
  {
    id: '5',
    title: 'LeagueBoard',
    url: 'https://league-board-rho.vercel.app/',
    content: `<article class="prose prose-invert max-w-none">
  <h1 class="text-sky-700 text-3xl font-bold mb-4">
    LeagueBoard: Uma Solução Fullstack para o Gerenciamento de Ligas Esportivas e Competições
  </h1>

  <p>
    O <strong>LeagueBoard</strong> depende do render do back-end para rodar o front-end a versão gratuita nem sempre permite que o render funcione na hora em que o site abre, emerge como uma aplicação web robusta e interativa, desenhada para ser o coração de qualquer liga ou competição, seja no universo dos e-sports, esportes tradicionais ou desafios amigáveis.
    Mais do que um simples placar, este projeto fullstack oferece uma plataforma completa para a gestão e visualização dinâmica de classificações e estatísticas, garantindo que a informação flua de maneira eficiente do servidor para a tela do usuário.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">A Essência Fullstack: Frontend e Backend em Harmonia</h2>
  <p>
    A arquitetura do LeagueBoard se destaca por sua abordagem fullstack, onde o frontend e o backend trabalham em perfeita sintonia para entregar uma experiência de usuário rica e dados atualizados em tempo real.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">O Poder do Node.js no Backend</h2>
  <p>
    No coração da camada de servidor do LeagueBoard reside uma API RESTful construída com <strong>Node.js</strong>. Essa infraestrutura, hospedada no <strong>Render</strong>, gerencia a persistência e recuperação de dados da liga.
    Como o Render é um serviço gratuito, pode haver um pequeno atraso na primeira requisição (warm-up), mas após isso a performance é consistente e confiável.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">O Frontend: Experiência e Interatividade</h2>
  <p>
    A interface é construída com foco na experiência do usuário, sendo totalmente <strong>responsiva</strong> e moderna.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">Construção com React e Next.js</h2>
  <p>
    O uso de <strong>React</strong> garante uma UI reativa e modular, enquanto o <strong>Next.js</strong> adiciona recursos como SSR/SSG e roteamento eficiente.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">Tipagem Segura com TypeScript</h2>
  <p>
    O uso de <strong>TypeScript</strong> adiciona robustez ao frontend, prevenindo erros comuns e facilitando a colaboração no código.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">Estilização Responsiva com Tailwind CSS</h2>
  <p>
    A estilização da aplicação é feita com <strong>Tailwind CSS</strong>, garantindo um visual limpo, adaptável e eficiente para todas as resoluções.
  </p>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">Funcionalidades e Impacto</h2>
  <ul class="list-disc list-inside">
    <li><strong>Classificações Dinâmicas:</strong> Visualização em tempo real das posições dos participantes.</li>
    <li><strong>Estatísticas Detalhadas:</strong> Acompanhamento completo do desempenho de equipes ou jogadores.</li>
  </ul>

  <h2 class="text-violet-600 text-2xl font-semibold mt-6 mb-2">Conclusão</h2>
  <p>
    O <strong>LeagueBoard</strong> é um exemplo sólido de como tecnologias modernas podem ser integradas para resolver desafios reais. Combinando uma API performática em Node.js, um frontend com Next.js, tipagem com TypeScript e estilização com Tailwind, o projeto entrega uma experiência completa e de alto nível.
  </p>
</article>

`,
    imageUrl: ['/images/f1.png', '/images/f2.png', '/images/f3.png', '/images/f4.png', '/images/f5.png' ],
  },
 
];

