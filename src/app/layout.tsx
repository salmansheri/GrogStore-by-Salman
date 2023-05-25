import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Message from '@/components/Message'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GrogStore',
  description: 'Buy Groceries at Low Cost',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-50 sticky top-0">

        <Navbar />
        </div>
        <Message />
        {children}
        </body>
    </html>
  )
}
