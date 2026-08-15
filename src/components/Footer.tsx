import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { siteConfig, TEL_LINK, WHATSAPP_LINK } from "@/config/siteConfig";
import { images } from "@/data/images";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "In-Car Driving", href: "#in-car-driving" },
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Car Driving", href: "#services" },
  { label: "Refresher Driving", href: "#services" },
  { label: "Defensive Driving", href: "#services" },
  { label: "Parking Training", href: "#services" },
  { label: "Highway Training", href: "#services" },
  { label: "Licence Assistance", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src={images.logo}
                alt={`${siteConfig.businessName} logo`}
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  const fb = (e.target as HTMLImageElement).nextElementSibling;
                  if (fb) (fb as HTMLElement).style.display = "flex";
                }}
              />
              <span
                className="hidden h-12 items-center rounded-lg bg-amber-500 px-3 text-sm font-bold text-slate-900"
                style={{ display: "none" }}
              >
                Bramma's
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional driving school offering practical road training, beginner
              courses and refresher lessons. Learn to drive with confidence.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-amber-500 hover:text-slate-900">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-amber-500 hover:text-slate-900">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-amber-500 hover:text-slate-900">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-amber-400">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-amber-400">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                <a href={TEL_LINK} className="transition-colors hover:text-amber-400">{siteConfig.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-amber-400">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-amber-400">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-amber-500" />
                <span>{siteConfig.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500">
            © 2026 {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-amber-400">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
