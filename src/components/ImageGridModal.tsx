// src/components/ImageGridModal.tsx
'use client'; 

import { useState, useCallback, useEffect } from 'react'; 
import Image from 'next/image';

interface ImageGridModalProps {
  images: string[]; 
  title: string; 
}

export default function ImageGridModal({ images, title }: ImageGridModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((imageUrl: string) => {
    setSelectedImage(imageUrl);
    
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  
  }, []);

  
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage, closeModal]);

  return (
    <>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {images.map((url, index) => (
          <div
            key={url} 
            className="relative w-full h-48 cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => openModal(url)}
          >
            <Image
              src={url}
              alt={`${title} imagem ${index + 1}`}
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-105" 
              
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Ver Imagem</span>
            </div>
          </div>
        ))}
      </div>

      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4 cursor-zoom-out" 
          onClick={closeModal} 
          role="dialog"
          aria-modal="true" 
          aria-label={`Imagem ampliada: ${title}`} // 
        >
          <div 
            className="relative w-full h-full max-w-screen-lg max-h-[90vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()} 
          >
            <Image
              key={selectedImage} 
              src={selectedImage}
              alt={`Imagem ampliada de ${title}`}
              fill 
              className="object-contain rounded-lg shadow-2xl" 
             
              sizes="100vw"
            />
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 text-xl font-bold z-50 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Fechar"
              title="Fechar (Esc)" 
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}