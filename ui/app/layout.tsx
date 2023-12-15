import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StoreProvider from './StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Chess',
  description: 'Customize how the pieces move and play!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      </head>
      <StoreProvider><body className={inter.className}>{children}</body></StoreProvider>
    </html>
  )
}
