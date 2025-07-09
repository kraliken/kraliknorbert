import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kralik Norbert",
  description:
    "Králik Norbert junior full-stack fejlesztő portfóliója. Webfejlesztés, gépi tanulás, Next.js, FastAPI, Python és Azure alapú alkalmazások.",
  keywords: [
    "Králik Norbert",
    "full-stack fejlesztő",
    "Next.js",
    "FastAPI",
    "Python",
    "Azure",
    "webfejlesztés",
    "gépi tanulás",
    "portfólió",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
