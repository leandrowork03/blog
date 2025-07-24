// src/components/ImageGridModal.tsx
'use client'; // <-- ESSENCIAL para que este seja um Client Component

import { useState } from 'react';
import Image from 'next/image';

interface ImageGridModalProps {
  images: string[]; // Lista de URLs das imagens
  title: string;    // Título do post para o alt text das imagens
}

export default function ImageGridModal({ images, title }: ImageGridModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Armazena a URL da imagem clicada

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {/* Grid de Imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {images.map((url, index) => (
          <div
            key={url} // Usar a URL como key, ou uma combinação se houver URLs repetidas
            className="relative w-full h-48 cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => openModal(url)}
          >
            <Image
              src={url}
              alt={`${title} imagem ${index + 1}`}
              fill // Preenche o contêiner pai
              className="object-cover transition-transform duration-300 group-hover:scale-105" // Efeito de zoom no hover
              unoptimized={true} // Mantenha para imagens locais
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Otimização de tamanho
            />
            {/* Overlay sutil ao passar o mouse */}
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              fill // Preenche o contêiner pai
              className="object-contain rounded-lg shadow-2xl" // 'object-contain' para não cortar a imagem
              unoptimized={true}
              sizes="100vw"
            />
            {/* Botão de Fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 text-xl font-bold z-50"
              aria-label="Fechar"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}