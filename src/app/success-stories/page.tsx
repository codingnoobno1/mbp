"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, 
  Maximize2, 
  Building2, 
  ChevronRight, 
  Calendar, 
  CheckCircle,
  Factory
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stories = [
  {
    id: 0,
    title: "Our Factory & Infrastructure",
    client: "MBPE Internal",
    year: "Since 1968",
    description: "Our state-of-the-art manufacturing facility equipped with advanced machinery for precision boiler fabrication and quality testing.",
    image: "/boiler.jpg",
    category: "Infrastructure"
  },
  {
    id: 1,
    title: "Mega Refinery Boiler Installation",
    client: "National O&G Corp",
    year: "2023",
    description: "Successful deployment of customized high-pressure boilers for a new refinery expansion, increasing production efficiency by 22%.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
    category: "Petrochemical"
  },
  {
    id: 2,
    title: "Eco-Friendly Sugar Mill System",
    client: "Global Sugar Industries",
    year: "2022",
    description: "Designed and installed a zero-emission pressure vessel system that recovered 40% of waste heat for process reuse.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    category: "Agro-Industry"
  },
  {
    id: 3,
    title: "Power Plant Pressure Upgrade",
    client: "States Power Ltd",
    year: "2023",
    description: "Complete overhaul of legacy heat exchangers with advanced nickel-alloy components for a 200MW power generation unit.",
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=800&auto=format&fit=crop",
    category: "Energy"
  },
  {
    id: 4,
    title: "Precision Cement Fabrication",
    client: "BuildHigh Cements",
    year: "2021",
    description: "Fabrication of specialized clinker cooling vessels, ensuring continuous operation under extreme thermal conditions.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    category: "Construction"
  },
  {
    id: 5,
    title: "Chemical Vessel Lifecycle Project",
    client: "PureChem Solutions",
    year: "2022",
    description: "Long-term maintenance partnership resulting in 100% safety record over 5 years of mission-critical vessel operation.",
    image: "https://images.unsplash.com/photo-1532187875605-1ef6c237a111?q=80&w=800&auto=format&fit=crop",
    category: "Chemical"
  },
  {
    id: 6,
    title: "Industrial Brewery Expansion",
    client: "Premium Brews Co.",
    year: "2024",
    description: "Installation of high-capacity food-grade steam generators for a new state-of-the-art brewing facility.",
    image: "https://images.unsplash.com/photo-1584221768041-343a019b850a?q=80&w=800&auto=format&fit=crop",
    category: "Food & Beverage"
  },
]

const stats = [
  { value: "48+", label: "Countries Served", icon: Building2 },
  { value: "1200+", label: "Units Installed", icon: Factory },
  { value: "100%", label: "Safety Success", icon: CheckCircle },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function SuccessStories() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Header */}
      <section className="bg-primary pt-32 pb-24 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-6"
          >
            Engineering Milestones
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Success <span className="text-sky-300 italic">Stories</span>
          </motion.h1>
          <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto leading-relaxed">
            From specialized refinery installations to global power plant integrations, explore how MBPE delivers industrial excellence.
          </p>
        </div>
      </section>

      {/* Stats Quick Look */}
      <section className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card p-10 rounded-[2rem] shadow-2xl flex flex-col items-center text-center gap-4 border"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <stat.icon className="w-8 h-8" />
              </div>
              <span className="text-4xl font-black">{stat.value}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all group overflow-hidden bg-zinc-50 dark:bg-zinc-900 border">
                <div 
                  className="relative h-64 overflow-hidden cursor-zoom-in"
                  onClick={() => setSelectedImage(story.image)}
                >
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary text-white border-none">{story.category}</Badge>
                </div>
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs font-bold text-primary mb-2">
                    <span className="flex items-center gap-1"><Building2 className="w-3 h-3" /> {story.client}</span>
                    <span className="flex items-center gap-1 opacity-50"><Calendar className="w-3 h-3" /> {story.year}</span>
                  </div>
                  <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{story.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.description}
                  </p>
                  <Button variant="link" className="p-0 h-fit w-fit font-bold group-hover:pl-2 transition-all">
                    Read Case Study <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative aspect-video w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl shadow-primary/20"
            >
              <Image 
                src={selectedImage} 
                alt="Case Study Detail" 
                fill 
                className="object-cover" 
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Quote */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto py-20 px-8 rounded-[3rem] bg-zinc-950 text-white text-center relative overflow-hidden flex flex-col items-center gap-8">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-2">
            <span className="text-2xl font-serif">"</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight italic">Every successful project is a result of meticulous engineering and client collaboration.</h3>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em]">- MBPE Engineering Ethics</p>
          <Button size="lg" className="rounded-full px-10 font-bold" asChild>
            <Link href="/contact">Partner with us for your next project</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
