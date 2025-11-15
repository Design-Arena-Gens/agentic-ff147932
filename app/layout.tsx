import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pulse Gym ? Salle de sport moderne',
  description: 'Cours motivants, coachs certifi?s et ?quipements premium. Rejoignez Pulse Gym.',
  metadataBase: new URL('https://agentic-ff147932.vercel.app'),
  openGraph: {
    title: 'Pulse Gym ? Salle de sport',
    description: 'Cours motivants, coachs certifi?s et ?quipements premium.',
    url: 'https://agentic-ff147932.vercel.app',
    siteName: 'Pulse Gym',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@',
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
