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
            
            <div className="flex-grow  bg-black/50 rounded p-4">{children}</div>

            <div className="w-full md:w-64 bg-black/50 rounded p-4">
            <ThemeToggle />
              <Menus />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
