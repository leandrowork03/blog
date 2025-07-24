/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione a configuração de 'images' aqui
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer hostname, ajuste para seus domínios reais em produção
      },
    ],
  },
};

module.exports = nextConfig;