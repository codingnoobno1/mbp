"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  FileText, 
  ShieldCheck, 
  HardHat, 
  Search, 
  Download, 
  ExternalLink,
  X,
  Plus,
  Scale,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const documents = [
  {
    name: "MBE Udyam Registration",
    category: "Registration",
    url: "/mbe-udyam-registration.pdf",
    description: "Official Udyam registration certificate for Modern Boilers & Equipments."
  },
  {
    name: "GST Certificate",
    category: "Tax Compliance",
    url: "/modern-boilers-gst-certificate.pdf",
    description: "Three-page Goods and Services Tax (GST) registration certificate."
  },
  {
    name: "Manufacturing License",
    category: "Licensing",
    url: "/modern-boiler-manufacturing-license.pdf",
    description: "Industrial license for boiler manufacturing (up to 300 kg capacity)."
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function Safety() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4"
            >
              <ShieldCheck className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold tracking-tight"
            >
              Safety, <span className="text-primary italic">Quality</span> & Compliance
            </motion.h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              At MBPE, safety isn't just a policy—it's the core of our engineering philosophy. We maintain the highest industrial standards across all manufacturing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Policy Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <motion.div {...fadeIn} className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 border border-primary/10 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Badge className="w-fit px-4 py-1 text-xs uppercase tracking-widest bg-primary/20 text-primary border-none font-bold">The Core Mission</Badge>
              <h2 className="text-3xl md:text-5xl font-bold">Safety Policy</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <HardHat className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg font-medium text-muted-foreground leading-relaxed italic">
                  "We are committed to providing a Safe Working Environment to all Employees."
                </p>
              </div>
              <Separator />
              <p className="text-muted-foreground leading-relaxed">
                Modern Boilers & Pressure Equipments is developing and documenting its occupational Health and Safety management systems. We believe in the industrial proverb: <span className="font-bold text-foreground">"Safety first, luck afterwards."</span>
              </p>
            </div>
            
            <div className="mt-auto grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-black/50 border shadow-sm flex items-center gap-3">
                <Scale className="text-primary w-5 h-5" />
                <span className="text-xs font-bold uppercase">Compliance Ready</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-black/50 border shadow-sm flex items-center gap-3">
                <Award className="text-primary w-5 h-5" />
                <span className="text-xs font-bold uppercase">Certified Standard</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.2 }}
            className="bg-zinc-950 text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col gap-10"
          >
            <div className="flex flex-col gap-4">
              <Badge className="w-fit px-4 py-1 text-xs uppercase tracking-widest bg-white/10 text-white border-white/20 font-bold">Policy Fulfillment</Badge>
              <h3 className="text-3xl md:text-5xl font-bold">To Fulfill Policy</h3>
            </div>
            
            <ul className="space-y-8">
              <li className="flex gap-6">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-1">
                  <Plus className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-xl">Training & Motivation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Implementing safety programs and specialized training to motivate employees to commit to our safety objectives.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-1">
                  <Plus className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-xl">Hazard Education</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Insisting on continuous education for personal safety and the protection of physical assets to minimize hazards.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Verification</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Our Certifications</h3>
          <p className="text-muted-foreground max-w-2xl">Official documents verifying our compliance with industrial regulations and standards.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
              <Card className="h-full border shadow-xl hover:border-primary/50 transition-all group overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/5 p-8 flex flex-col gap-6 relative">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black/20 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className="w-fit text-[10px] font-bold uppercase tracking-wider mb-2">{doc.category}</Badge>
                      <h4 className="text-xl font-bold">{doc.name}</h4>
                      <p className="text-muted-foreground text-sm line-clamp-2">{doc.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-background border-t flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="font-bold text-xs" onClick={() => setSelectedDoc(doc.url)}>
                      <Search className="w-3 h-3 mr-2" /> Preview
                    </Button>
                    <Button variant="outline" size="sm" className="font-bold text-xs" asChild>
                      <a href={doc.url} download>
                        <Download className="w-3 h-3 mr-2" /> Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen PDF Viewer Overlay */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="bg-zinc-100 p-4 border-b flex items-center justify-between">
                <span className="font-bold flex items-center gap-2 text-black">
                  <FileText className="w-5 h-5 text-primary" /> Document Preview
                </span>
                <button 
                  onClick={() => setSelectedDoc(null)}
                  className="w-10 h-10 rounded-full hover:bg-zinc-200 flex items-center justify-center transition-colors text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow relative">
                <iframe 
                  src={selectedDoc} 
                  className="w-full h-full border-none"
                  title="Document Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Safety Banner */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="bg-primary/10 rounded-[2.5rem] p-12 text-center flex flex-col items-center gap-6">
          <ShieldCheck className="w-16 h-16 text-primary" />
          <h3 className="text-3xl font-bold italic">"Excellence is never an accident; it is always the result of high intention, sincere effort, and intelligent execution."</h3>
          <p className="text-muted-foreground font-semibold uppercase tracking-widest">- MBPE Quality Assurance</p>
        </motion.div>
      </section>
    </div>
  )
}
