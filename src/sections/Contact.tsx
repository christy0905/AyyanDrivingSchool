import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { siteConfig, TEL_LINK, WHATSAPP_LINK } from "@/config/siteConfig";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const courseOptions = ["Beginner Course", "Refresher Course", "Advanced Course", "Car Driving Lessons", "Defensive Driving", "Parking Practice", "Highway Driving"];

interface FormState {
  name: string;
  phone: string;
  email: string;
  course: string;
  area: string;
  date: string;
  time: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  course: "",
  area: "",
  date: "",
  time: "",
  message: "",
};

const contactInfo = [
  { icon: Phone, label: "Phone", value: siteConfig.phoneDisplay, href: TEL_LINK },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: WHATSAPP_LINK },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: MapPin, label: "Location", value: siteConfig.address },
  { icon: Clock, label: "Opening Hours", value: siteConfig.openingHours },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) {
      e.phone = "Please enter your phone number.";
    } else if (!/^[+]?[0-9]{10,13}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      e.phone = "Please enter a valid phone number.";
    }
    if (!form.course) e.course = "Please select a course.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const inputClass = (key: keyof FormState) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
      errors[key] ? "border-red-400" : "border-slate-200"
    }`;

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Ready to Start Driving?"
              align="left"
            />
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Contact us today and take the first step toward becoming a confident driver.
            </p>
            <ul className="mt-8 space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{info.label}</p>
                      <p className="text-sm font-medium text-slate-900">{info.value}</p>
                    </div>
                  </div>
                );
                return (
                  <li key={info.label}>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block transition-opacity hover:opacity-70">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 shadow-md ring-1 ring-slate-100 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
                <h3 className="mt-5 text-xl font-bold text-slate-900">Thank you!</h3>
                <p className="mt-2 max-w-sm text-sm text-slate-600">
                  Your enquiry has been received. We'll get back to you shortly.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-6">
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">Full Name *</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass("name")} placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">Phone Number *</label>
                    <input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("phone")} placeholder="+91 98765 43210" />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-slate-700">Course *</label>
                    <select id="course" value={form.course} onChange={(e) => update("course", e.target.value)} className={inputClass("course")}>
                      <option value="">Select a course</option>
                      {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.course && <p className="mt-1 text-xs text-red-500">{errors.course}</p>}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-slate-700">Preferred Area</label>
                    <input id="area" type="text" value={form.area} onChange={(e) => update("area", e.target.value)} className={inputClass("area")} placeholder="Area" />
                  </div>
                  <div>
                    <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-slate-700">Preferred Date</label>
                    <input id="date" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputClass("date")} />
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-slate-700">Preferred Time</label>
                    <input id="time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={inputClass("time")} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                  <textarea id="message" rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} className={inputClass("message")} placeholder="Tell us about your driving goals..." />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
