"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products & Services", href: "/products" },
  { name: "Safety & Quality", href: "/safety" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 relative overflow-hidden rounded-lg group-hover:scale-110 transition-transform">
            <Image src="/logo.jpg" alt="MBPE Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none">MBPE</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Modern Boilers</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4 rounded-full px-6">
            <Link href="/contact">Get Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-xl font-semibold flex items-center justify-between group",
                      pathname === item.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.name}
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-xl py-6 text-lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
