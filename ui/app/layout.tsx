import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Custom Chess",
  description: "Customize how the pieces move and play!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </head>
      
      <StoreProvider>
        <body className={inter.className}>
        <NavBar
        navItems={[
          { label: 'Create a game', link: '/creategame' },
          { label: 'How it works', link: '/' },
          { label: 'Profile', link: '/' },
          { label: 'Logout', link: '/' }
        ]}
      />
          <div className="flex-grow bg-gradient-to-r from-blue-600 to-blue-400 p-4 md:p-8">{children}</div>
          <Footer
        links={[
          { label: 'GitHub', link: 'https://github.com/' },
          { label: 'Contact Us', link: 'mailto:info@example.com' },
          { label: 'Upcoming features and improvements', link: 'github.com/issues' }
        ]}
      />
        </body>
      </StoreProvider>
    </html>
  );
}
