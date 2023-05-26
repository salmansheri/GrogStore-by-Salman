import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Message from "@/components/Message";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import ToasterProvider from "@/providers/ToasterProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GrogStore",
  description: "Buy Groceries at Low Cost",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <div className="z-50 sticky top-0">
            {/* @ts-ignore  */}
            <Navbar user={user?.firstName} />
          </div>
          <Message />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
