"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  Wind, 
  Flame,
  Wrench
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  { 
    name: "Industrial Boilers", 
    image: "https://www.rasmech.com/wp-content/uploads/2020/11/D-Style-5.jpg", 
    description: "High-efficiency, custom-engineered steam boilers designed for maximum thermal performance and durability in heavy industrial applications.",
    features: ["ASME Certified", "Multi-Fuel Support", "Low NOx Emissions"]
  },
  { 
    name: "Pressure Vessels", 
    image: "https://th.bing.com/th/id/R.5628bdac05ec5553222b488df7a97a44?rik=GaRSxsH5qMfH%2fA&riu=http%3a%2f%2fwww.titanmf.com%2fwp-content%2fuploads%2f2014%2f03%2fZirconium-702-Pressure-Vessel-001.jpg&ehk=q4zMakWLCSypSnX4tECj%2b7G14erL8VIJP02Xnxld%2bYE%3d&risl=&pid=ImgRaw&r=0", 
    description: "Precision-manufactured pressure vessels for safe storage and processing of high-pressure fluids and gases across various industries.",
    features: ["Corrosion Resistant", "Precision Welding", "Safety Inspected"]
  },
  { 
    name: "Heat Exchangers", 
    image: "https://savree-storage.s3.amazonaws.com/Articles/optimised/heat-exchanger-course-image-min.jpg", 
    description: "Advanced shell and tube heat exchangers engineered for optimal energy transfer and thermal efficiency in extreme environments.",
    features: ["Optimal Heat Transfer", "Easy Maintenance", "Custom Materials"]
  }
]

const services = [
  {
    title: "Installation & Commissioning",
    icon: Settings,
    text: "Expert on-site installation and testing of all boiler and pressure equipment."
  },
  {
    title: "Energy Auditing",
    icon: Zap,
    text: "Technical analysis to optimize your existing equipment for better fuel efficiency."
  },
  {
    title: "Maintenance & Repair",
    icon: Wrench,
    text: "24/7 support for industrial equipment to ensure zero downtime."
  },
  {
    title: "Technical Consultation",
    icon: ShieldCheck,
    text: "Expert advice on boiler design and practical efficiency solutions."
  }
]

const projects = [
  { 
    title: "Mega Refinery Project", 
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop", 
    details: "Successful deployment of high-capacity boilers in a major oil refinery." 
  },
  { 
    title: "Power Plant Integration", 
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=1200&auto=format&fit=crop", 
    details: "Precision installation of advanced pressure vessels for a power generation facility." 
  }
]

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function Products() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Header */}
      <section className="bg-zinc-950 text-zinc-100 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center gap-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-bold tracking-tight"
          >
            Engineering <span className="text-primary italic">Solutions</span>
          </motion.h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            High-performance industrial equipment tailored to the most demanding specifications since 1968.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Our Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Industrial Product Line</h3>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-32">
          {products.map((product, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`overflow-hidden rounded-[2.5rem] shadow-2xl relative h-[400px] md:h-[500px] group ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              
              <div className="flex flex-col gap-6 lg:px-8">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-primary border-primary/20 px-3 py-1 uppercase tracking-widest text-[10px] font-bold">Category: Energy</Badge>
                </div>
                <h4 className="text-3xl md:text-5xl font-bold">{product.name}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {product.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 rounded-xl w-fit px-8 h-12 text-md font-bold" asChild>
                  <Link href="/contact">Request Technical Specs</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Specialized Services</h2>
            <p className="text-muted-foreground max-w-xl">Beyond manufacturing, we provide end-to-end technical support for industrial installations.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border-none group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mt-6 mb-3">{s.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights Carousel/Grid */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Field Achievements</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Project Highlights</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden group shadow-2xl h-[400px]"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-gray-300 text-sm">{project.details}</p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specs CTA */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="bg-zinc-900 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden group border border-white/5">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Need a Custom Pressure Solution?</h3>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Our engineering team specializes in designing bespoke boilers and vessels for unique industrial requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg font-bold">
              Speak with an Engineer
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold bg-transparent border-white/20 text-white hover:bg-white/10">
              Download Catalog
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
