"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Clock, Send, ShieldAlert, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    title: "Our Location",
    description: "MBPE Office, Industrial Area, Ambala, Haryana - 133001, India",
    icon: MapPin,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Email Us",
    description: "modern_boilers@rediffmail.com",
    icon: Mail,
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Call Us",
    description: "+91 98960 70515, +91 98960 51370",
    icon: Phone,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Working Hours",
    description: "Mon - Sat: 9:00 AM - 6:00 PM",
    icon: Clock,
    color: "bg-orange-500/10 text-orange-600",
  },
]

const safetyCommitments = [
  {
    title: "Our Commitment",
    description: "MBPE is dedicated to providing a safe and healthy working environment for all employees and contractors.",
    icon: ShieldAlert,
  },
  {
    title: "Safety Policy",
    description: "We enforce strict safety training and equipment maintenance to minimize hazards across all industrial sites.",
    icon: BadgeCheck,
  },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Get in <span className="text-primary italic">Touch</span>
          </motion.h1>
          <p className="text-muted-foreground text-xl mt-4 max-w-xl mx-auto">
            Have a project in mind or need technical assistance? Our experts are here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-none shadow-xl hover:-translate-y-1 transition-transform">
                <CardContent className="p-8 flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl">{info.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Safety */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div {...fadeIn} className="lg:col-span-3">
            <div className="bg-card border rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <Input placeholder="John Doe" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold">Subject</label>
                  <Input placeholder="Project Inquiry" className="rounded-xl h-12" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold">Message</label>
                  <Textarea placeholder="Tell us about your requirements..." className="rounded-xl min-h-[150px] resize-none" />
                </div>
                <Button size="lg" className="md:col-span-2 rounded-xl h-14 font-bold text-lg">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Safety & Side Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-zinc-900 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold italic">Safety First</h3>
                </div>
                
                {safetyCommitments.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
                
                <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2 italic">Industrial Motto</p>
                  <p className="text-lg font-bold">"Safety first, luck afterwards."</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border-8 border-background shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-6 left-6 z-10 bg-background/90 backdrop-blur p-4 rounded-2xl border shadow-lg hidden md:block">
            <h4 className="font-bold flex items-center gap-2">
              <MapPin className="text-primary w-4 h-4" />
              Main Office HQ
            </h4>
            <p className="text-xs text-muted-foreground mt-1">Industrial Area, Ambala, Haryana</p>
          </div>
          <iframe
            title="MBPE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4357288764835!2d76.84066!3d30.34795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb630d0716d05%3A0x239e0eb770777352!2sIndustrial%20Area%2C%20Ambala%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  )
}
