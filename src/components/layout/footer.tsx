import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Products & Services", href: "/products" },
      { name: "Safety & Quality", href: "/safety" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Industrial Boiler Installations", href: "/products" },
      { name: "Pressure Vessel Manufacturing", href: "/products" },
      { name: "Heat Exchanger Solutions", href: "/products" },
      { name: "Energy Audit & Consulting", href: "/products" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 relative overflow-hidden rounded-lg group-hover:scale-110 transition-transform bg-white">
              <Image src="/logo.jpg" alt="MBPE Logo" fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none text-white">MBPE</span>
              <span className="text-[10px] uppercase tracking-widest text-primary-foreground opacity-70 font-medium tracking-widest">Modern Boilers</span>
            </div>
          </Link>
          <p className="text-primary-foreground opacity-70 text-sm leading-relaxed max-w-xs mt-2">
            Leading industrial solutions in boiler efficiency and pressure equipment since 1968. Committed to safety, quality, and excellence.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
              <FaLinkedin className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
              <FaFacebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
              <FaTwitter className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-lg mb-6 text-white">{section.title}</h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm opacity-70 hover:opacity-100 hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="font-semibold text-lg mb-6 text-white">Contact Info</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm opacity-70">
                MBPE Office, Industrial Area,<br />
                Ambala, Haryana - 133001, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0" />
              <div className="flex flex-col text-sm opacity-70">
                <span>+91 98960 70515 (Mr. Bakshi)</span>
                <span>+91 98960 51370 (Mr. Singh)</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0" />
              <span className="text-sm opacity-70">modern_boilers@rediffmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50">
        <p>© {new Date().getFullYear()} Modern Boilers & Pressure Equipments. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:opacity-100">Privacy Policy</Link>
          <Link href="/terms" className="hover:opacity-100">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
