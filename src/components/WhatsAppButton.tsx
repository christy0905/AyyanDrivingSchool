import { WHATSAPP_LINK } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 py-3.5 pl-3.5 pr-3.5 text-white shadow-xl shadow-green-500/30 transition-all duration-300 hover:bg-green-600 hover:shadow-2xl sm:pr-5"
    >
      <MessageCircle className="h-6 w-6 flex-none" fill="currentColor" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[120px] sm:inline-block sm:max-w-[120px]">
        WhatsApp Us
      </span>
    </a>
  );
}
