'use client';
import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";
import { AppProvider } from "./Provider";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${josefin.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 bg-no-repeat dark:to-black duration-300` }>
        <AppProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--bg-toast)",
                color: "var(--text-toast)",
              },
            }}
          />
          {children}
        </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
