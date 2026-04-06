"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Factory, 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  Settings, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  TrendingUp,
  FileText,
  Construction
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const strengths = [
  {
    title: "In-depth Market Knowledge",
    description: "Extensive experience across Power, Sugar, Paper, Cement, and Steel projects.",
    icon: Factory,
  },
  {
    title: "Standard Compliance",
    description: "Familiarity with various global industrial practices and standards.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Troubleshooting",
    description: "Capability to analyze and resolve field problems in challenging sites.",
    icon: Zap,
  },
  {
    title: "Agency Relations",
    description: "Understanding requirements from top inspection and consulting organizations.",
    icon: Award,
  },
]

const customers = [
  { name: "Hindustan Zinc", logo: "https://logowik.com/content/uploads/images/hindustan-zinc7644.jpg" },
  { name: "Ambuja Cement", logo: "https://static.startuptalky.com/2021/05/Ambuja-Cement-startuptalky-1.jpg" },
  { name: "Thermax", logo: "https://digest.myhq.in/wp-content/uploads/2023/04/Thermax-1536x1024.png" },
  { name: "Mahakaushal Sugar", logo: "https://www.synergytransformers.com/wp-content/uploads/2023/02/Mahakaushal-Sugar-Power-Industries-LTD.png" },
  { name: "Associated Furnaces", logo: "https://www.associated-furnaces.com/images/product/aluminium/big/secondary_smelthers.jpg" },
  { name: "Industrial Partner", logo: "https://th.bing.com/th/id/OIP.1eUhW6G5JwD3LXbKO59hPAHaE8?rs=1&pid=ImgDetMain" },
]

const processSteps = [
  { title: "Inquiry Analysis", icon: ClipboardCheck, description: "Detailed study of scope and specifications." },
  { title: "Competitive Bidding", icon: TrendingUp, description: "Advanced market trend analysis for best rates." },
  { title: "Project Execution", icon: FileText, description: "Meticulous PO management and drawing verification." },
  { title: "Quality Assurance", icon: Construction, description: "Multi-stage QC checks from fit-up to final finish." },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/boiler.jpg" 
            alt="Industrial Boiler Background" 
            fill 
            className="object-cover opacity-20 dark:opacity-10 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
          >
            <Factory className="w-4 h-4" />
            Empowering Industries Since 1968
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl"
          >
            Pioneering Excellence in <span className="text-primary italic">Industrial Boilers</span> & Pressure Equipments
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            Leading the industry with uncompromised quality, innovative designs, and decades of engineering expertise for power, sugar, and cement projects.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 text-lg">
              <Link href="/products">Explore Solutions <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg" asChild>
              <Link href="/about">Our Legacy</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Scroll Down</span>
        </motion.div>
      </section>

      {/* Strengths Section */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Strategic Advantage</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why Choose MBPE?</h3>
          <p className="text-muted-foreground max-w-2xl">
            Our association with major industrial projects has equipped us with the knowledge and capability to handle complex engineering challenges.
          </p>
        </motion.div>

        <div className="md:hidden flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
          {strengths.map((item, i) => (
            <div key={i} className="min-w-[85vw] snap-center">
              <Card className="h-full border-none shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strengths.map((item, i) => (
            <motion.div key={i} variants={fadeIn}>
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-shadow bg-card/50 backdrop-blur-sm group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <CardContent className="p-8 flex flex-col gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Infrastructure Section */}
      <section className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="flex flex-col gap-8">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">Advanced Industrial <span className="text-primary italic">Infrastructure</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              MBPE boasts state-of-the-art infrastructure divided into specialized departments: quality control, development, production, and human resources. 
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Highly Qualified Engineers",
                "Advanced Site Supervisors",
                "Specialized QC Lab",
                "Integrated Production Line"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 italic border-l-2 border-primary pl-4 py-2">
              Collaborating with Modern Engineers & Erectors (MEES) to ensure seamless project realization.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden group shadow-2xl shadow-primary/20"
          >
            <Image 
              src="/organisation.jpg" 
              alt="Organization Chart" 
              fill 
              className="object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute bottom-4 right-4 bg-primary px-4 py-2 rounded-lg font-bold text-sm shadow-xl">
              Organization Structure
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working System Section */}
      <section className="container mx-auto px-4">
        <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4 mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary">The MBPE Way</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Our Working System</h3>
          <p className="text-muted-foreground max-w-2xl">
            A meticulous, process-driven approach from initial inquiry to final delivery ensures every job meets our rigorous standards.
          </p>
        </motion.div>

        <div className="relative">
          {/* Mobile Accordions */}
          <div className="flex flex-col gap-4 md:hidden">
            {processSteps.map((step, i) => (
              <details key={i} className="group bg-card border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                  </div>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <ArrowRight className="w-5 h-5 rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t pt-4">
                  {step.description}
                </div>
              </details>
            ))}
          </div>

          {/* Desktop Stepper */}
          <div className="hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
            
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, i) => (
                <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center gap-6 relative">
                  <div className="w-20 h-20 rounded-2xl bg-background border-2 border-primary/20 shadow-lg flex items-center justify-center group hover:border-primary transition-colors relative z-10">
                    <step.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      0{i+1}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-xl">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      {/* Customers Section */}
      <section className="bg-zinc-50 dark:bg-zinc-950 py-32 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 mb-20">
          <motion.div {...fadeIn} className="flex flex-col items-center text-center gap-4">
            <h2 className="text-sm uppercase tracking-[0.4em] font-bold text-primary">Global Presence</h2>
            <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">Our Valued Customers</h3>
            <p className="text-muted-foreground max-w-2xl mt-4 text-lg">
              Partnering with global industrial giants to deliver engineering excellence across power, sugar, and cement sectors.
            </p>
          </motion.div>
        </div>
        
        <div className="relative flex flex-col gap-12">
          {/* First Marquee Row */}
          <div className="flex overflow-hidden group select-none">
            <motion.div 
              animate={{ x: [0, -1920] }} 
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex items-center gap-8 whitespace-nowrap min-w-max px-4"
            >
              {[...customers, ...customers, ...customers].map((customer, i) => (
                <div 
                  key={i} 
                  className="w-64 h-32 flex items-center justify-center p-8 rounded-2xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 cursor-default group/card"
                >
                  <Image 
                    src={customer.logo} 
                    alt={customer.name} 
                    width={180}
                    height={90}
                    className="object-contain transition-all duration-300 opacity-100 group-hover/card:scale-110" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Second Row (Reverse) */}
          <div className="flex overflow-hidden group select-none">
            <motion.div 
              animate={{ x: [-1920, 0] }} 
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="flex items-center gap-8 whitespace-nowrap min-w-max px-4"
            >
              {[...customers, ...customers, ...customers].map((customer, i) => (
                <div 
                  key={i} 
                  className="w-64 h-32 flex items-center justify-center p-8 rounded-2xl bg-card border shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 transform hover:translate-y-1 cursor-default group/card"
                >
                  <Image 
                    src={customer.logo} 
                    alt={customer.name} 
                    width={180}
                    height={90}
                    className="object-contain transition-all duration-300 opacity-100 group-hover/card:scale-110" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[2rem] p-12 md:p-20 text-primary-foreground text-center flex flex-col items-center gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full -mr-32 -mb-32 blur-3xl" />
          
          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl relative z-10">Ready to Elevate Your Boiler Efficiency?</h2>
          <p className="text-primary-foreground/80 text-xl max-w-2xl relative z-10">
            Let our experts help you design and install high-performance industrial equipment tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <Button size="lg" variant="secondary" className="rounded-full px-12 text-lg font-bold" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-12 text-lg font-bold bg-transparent border-white/20 hover:bg-white/10" asChild>
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
