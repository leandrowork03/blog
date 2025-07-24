//src/app/layout.tsx
import './globals.css'
import { Providers } from './providers'
import { Menus } from './components/menus'
import { ThemeToggle } from './components/ThemeToggle'
export const metadata = {
  title: 'Blog com GraphQL',
  description: 'Blog usando Next.js e GraphQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
        

          <div className="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto gap-4 my-4">
            <div className="w-full md:w-64 bg-black/80 rounded p-4">
            <ThemeToggle />
              <Menus />
            </div>
            
            <div className="max-w-5xl bg-black/80 rounded p-4">{children}</div>

          </div>
        </Providers>
      </body>
    </html>
  )
}

