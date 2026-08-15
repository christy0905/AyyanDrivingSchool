import { useEffect, useState } from "react";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { siteConfig, TEL_LINK } from "@/config/siteConfig";
import { images } from "@/data/images";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "In-Car Driving", href: "#in-car-driving" },
  { label: "Courses", href: "#courses" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5" aria-label={siteConfig.businessName}>
          <img
            src={images.logo}
            alt={`${siteConfig.businessName} logo`}
            className="h-11 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const fallback = (e.target as HTMLImageElement).nextElementSibling;
              if (fallback) (fallback as HTMLElement).style.display = "flex";
            }}
          />
          <span
            className="hidden h-11 items-center rounded-lg bg-amber-500 px-3 text-sm font-bold leading-tight text-slate-900"
            style={{ display: "none" }}
          >
            Bramma's
            <br />
            Driving
          </span>
          <span className="ml-1 hidden text-base font-bold text-slate-900 sm:block">
            {siteConfig.businessName}
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-amber-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={TEL_LINK}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-amber-600"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <Button as="a" href="#contact" size="sm">
            <CalendarCheck className="h-4 w-4" />
            Book Now
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-slate-100" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-amber-50 hover:text-amber-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button as="a" href="#contact" size="md" className="w-full" onClick={() => setOpen(false)}>
              <CalendarCheck className="h-4 w-4" />
              Book Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
