"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Shield, MessageSquare, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const items = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: Package },
  { name: "Safety", href: "/safety", icon: Shield },
  { name: "Contact", href: "/contact", icon: Phone },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      {/* Fixed Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t pb-safe-area-inset-bottom">
        <div className="flex items-center justify-around h-16 max-w-md mx-auto relative">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 transition-colors relative px-4",
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-tighter">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="mobile-nav-indicator"
                    className="absolute -top-1 w-8 h-1 bg-primary rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Floating Action Button (FAB) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-24 right-6 z-50"
      >
        <Link 
          href="/contact" 
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  )
}
