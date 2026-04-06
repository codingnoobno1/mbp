"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, Calendar, Target, Globe, Award, ShieldCheck, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const founders = [
  {
    name: "Mr. S.P. Singh",
    role: "Founder & Technical Director",
    experience: "58 Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop",
    description: "A legendary figure in the boiler field, recognized for providing the best boiler efficiency solutions and practical designs since 1968."
  },
  {
    name: "Mr. Yogesh Bakshi",
    role: "Co-Founder & Operations Head",
    experience: "30 Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    description: "Expert in mechanical and workshop progressions, ensuring perfection in on-site jobs and operational excellence."
  }
]

const values = [
  { title: "Innovation", icon: Target, text: "Constantly evolving our designs for maximum efficiency." },
  { title: "Excellence", icon: Award, text: "Delivering superior quality in every pressure vessel we craft." },
  { title: "Integrity", icon: ShieldCheck, text: "Building lasting relationships through transparent dealings." },
  { title: "Commitment", icon: Heart, text: "Dedicated to our clients' success and industrial growth." },
]

const stats = [
  { label: "Years of Experience", value: "55+" },
  { label: "Successful Projects", value: "1200+" },
  { label: "Industrial Partners", value: "250+" },
  { label: "Quality Awards", value: "15+" },
]

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Page Header */}
      <section className="bg-primary/5 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-primary italic">Legacy</span> of Excellence
          </motion.h1>
          <p className="text-muted-foreground text-xl max-w-2xl">
            Modern Boilers & Pressure Equipments (MBPE) has been a cornerstone of industrial engineering since 1968.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Bridging Tradition with Technology</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We started with a vision to provide innovative solutions in the boiler industry. Over the past five decades, we have evolved into a leading industrial partner, providing state-of-the-art boiler efficiency solutions and practical designs that stand the test of time.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our commitment to safety and quality has made us a trusted name for power plants, sugar mills, and various manufacturing industries globally.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop" 
              alt="Industrial Engineering" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-zinc-950 text-white py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-16">
            <h3 className="text-3xl md:text-5xl font-bold">Our Core Values</h3>
            <p className="text-gray-400 max-w-xl">What drives us to deliver excellence every single day.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold">{v.title}</h4>
                <p className="text-gray-400 text-sm">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">Our Founders</h2>
          <p className="text-muted-foreground max-w-2xl">The visionaries who built MBPE into a symbol of reliability and industrial excellence.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-2xl relative group bg-card">
                <CardContent className="p-0">
                  <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
                    <div className="relative h-72 md:h-full md:col-span-2">
                      <Image 
                        src={founder.image} 
                        alt={founder.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
                      <div className="absolute bottom-4 left-6 md:hidden">
                        <h4 className="text-2xl font-bold text-white">{founder.name}</h4>
                        <span className="text-primary-foreground font-semibold text-xs uppercase tracking-widest">{founder.role}</span>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 flex flex-col gap-4">
                      <div className="hidden md:flex flex-col">
                        <h4 className="text-2xl font-bold">{founder.name}</h4>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">{founder.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-primary/5 px-2 py-1 rounded w-fit">
                        <Calendar className="w-3 h-3" />
                        {founder.experience} EXPERIENCE
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed italic">
                        "{founder.description}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Contact Footer */}
      <section className="container mx-auto px-4">
        <motion.div 
          {...fadeIn}
          className="bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] p-12 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex flex-col gap-4 text-center lg:text-left">
            <h3 className="text-3xl font-bold">Get in Touch with Our Leadership</h3>
            <p className="text-muted-foreground italic">Direct communication for critical industrial queries.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center gap-4 bg-white dark:bg-black p-6 rounded-2xl shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase">General Inquiries</span>
                <span className="font-bold">+91 98960 70515</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white dark:bg-black p-6 rounded-2xl shadow-sm border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-muted-foreground uppercase">Official Email</span>
                <span className="font-bold">modern_boilers@rediffmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
