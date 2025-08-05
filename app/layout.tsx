import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Transporte Nacional G&G - Servicios de Transporte Confiable',
  description: 'Empresa líder en servicios de transporte seguro, puntual y confiable. Transporte personal, empresarial, carga y cobertura nacional.',
  keywords: 'transporte, servicios de transporte, transporte seguro, empresa de transporte, transporte colombia',
  authors: [{ name: 'Transporte Nacional G&G' }],
  creator: 'Transporte Nacional G&G',
  publisher: 'Transporte Nacional G&G',
  robots: 'index, follow',
  metadataBase: new URL('https://transportenacionalg6g.com'),
  
  // Configuración completa de iconos/favicons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: { 
      url: '/apple-touch-icon.png', 
      sizes: '180x180',
      type: 'image/png'
    },
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/web-app-manifest-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png', 
        sizes: '512x512',
        url: '/web-app-manifest-512x512.png',
      },
    ],
  },
  
  // Manifest para PWA
  manifest: '/site.webmanifest',
  
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://transportenacionalg6g.com',
    title: 'Transporte Nacional G&G - Servicios de Transporte Confiable',
    description: 'Empresa líder en servicios de transporte seguro, puntual y confiable en Colombia.',
    siteName: 'Transporte Nacional G&G',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Transporte Nacional G&G Logo',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Transporte Nacional G&G - Servicios de Transporte Confiable',
    description: 'Empresa líder en servicios de transporte seguro, puntual y confiable en Colombia.',
    images: ['/web-app-manifest-512x512.png'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}