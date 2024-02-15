import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import AuthContext from '../contexts/AuthContext'
import CourtContext from '../contexts/CourtContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
      </Head>
      <body className={'noto-sans'}>
        <AuthContext>
          <CourtContext>
            {children}
          </CourtContext>
        </AuthContext>
      </body>
    </html>
  )
}
