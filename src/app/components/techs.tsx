// src/components/TechStack.tsx
import Image from 'next/image';

interface TechIconProps {
  src: string;
  alt: string; 
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ src, alt, name }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="relative w-16 h-16 mb-2"> 
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain" 
        unoptimized={true} 
      />
    </div>
    <span className="text-white text-sm font-medium text-center">{name}</span>
  </div>
);

export function TechStack() {
  const technologies = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML Icon', name: 'HTML' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS Icon', name: 'CSS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript Icon', name: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React Icon', name: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', alt: 'Next.js Icon', name: 'Next.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js Icon', name: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', alt: 'GraphQL Icon', name: 'GraphQL' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind CSS Icon', name: 'Tailwind CSS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', alt: 'Firebase Icon', name: 'Firebase' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', alt: 'Supabase Icon', name: 'Supabase' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', alt: 'Material-UI Icon', name: 'Material UI' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1024px-Figma-logo.svg.png', alt: 'API Icon (Placeholder)', name: 'Axios' }, 
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg', alt: 'Framer Motion Icon', name: 'Framer Motion' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg', alt: 'React Router Icon', name: 'React Router' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git Icon', name: 'Git' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub Icon', name: 'GitHub' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', alt: 'Netlify Icon', name: 'Netlify' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', alt: 'Vercel Icon', name: 'Vercel' },
  ];

  return (
    <section className="py-10">
      <h2 className="text-sky-700 text-3xl font-bold text-center mb-8">Minhas Habilidades e Ferramentas</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {technologies.map((tech) => (
          <TechIcon key={tech.name} src={tech.src} alt={tech.alt} name={tech.name} />
        ))}
      </div>
    </section>
  );
}

