import AuthProvider from "@/providers/AuthProvider"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { currentUser } from "@clerk/nextjs"
import Footer from "@/components/Footer"; 
import Provider from "@/providers/Providers";


export const metadata = {
  title: 'Grocstore',
  description: 'buy groceries at low cost',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = currentUser(); 
  return (
    <AuthProvider>

    <html lang="en">
      <body>
        <Provider>

        <Navbar user={user} />
        {children}
        <Footer />
        </Provider>
        </body>
    </html>
    </AuthProvider>
  )
}
