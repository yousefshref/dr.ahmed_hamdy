import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cookiy - Software Company',
  description: 'Cookiy Company Choose it in your Software System or web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Cookiy - Software Company</title>
        <meta name='description' content='Cookiy Company Choose it in your Software System or web applications' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
