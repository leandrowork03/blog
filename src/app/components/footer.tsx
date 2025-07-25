// src/app/components/footer.tsx
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importe os ícones

export function Footer() {
  const whatsappNumber = '5551982126888';
  const emailAddress = 'leandrotrabalho03@gmail.com,';

  return (
    <footer className="bg-gray-950 pt-10 pb-6 border-t-2 border-t-blue-500 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center  mx-auto px-4">
       
        <h1 className="text-4xl font-black text-blue-500 mb-6 md:mb-0">Leandro Santos</h1> 

       
        <div className="flex flex-wrap justify-center gap-4 text-3xl">
          <Link
            href="https://www.linkedin.com/in/leandro-santos-front-end/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu perfil no LinkedIn"
            className="text-gray-300 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://github.com/leandrowork03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu perfil no GitHub"
            className="text-gray-300 hover:text-gray-600 transition-colors duration-300"
          >
            <FaGithub />
          </Link>

          <Link
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale comigo no WhatsApp"
            className="text-gray-300 hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp />
          </Link>

          <Link
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envie um e-mail"
            className="text-gray-300 hover:text-red-500 transition-colors duration-300"
          >
            <FaEnvelope />
          </Link>
        </div>
      </div>

      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Leandro Santos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

