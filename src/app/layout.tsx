import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MBPE | Modern Boilers & Pressure Equipments",
  description: "Leading industrial solutions in boiler efficiency and pressure equipment since 1968. Experts in Boiler Manufacturing, Pressure Vessels, and Heat Exchangers.",
  keywords: ["Modern Boilers", "Boiler Manufacturing", "Pressure Vessels", "Heat Exchangers", "Industrial Engineering", "MBPE"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
