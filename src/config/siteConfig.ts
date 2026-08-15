export const siteConfig = {
  businessName: "Bramma's Driving School",
  shortName: "Bramma's",
  tagline: "Professional Driving School",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@brammasdrivingschool.com",
  location: "Chennai, Tamil Nadu, India",
  address: "No. 12, Anna Salai, Chennai, Tamil Nadu 600002",
  website: "https://www.brammasdrivingschool.com",
  openingHours: "Mon – Sat: 6:00 AM – 9:00 PM",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export const WHATSAPP_NUMBER = siteConfig.whatsapp;
export const WHATSAPP_MESSAGE = "Hi, I would like to enquire about driving lessons.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const TEL_LINK = `tel:${siteConfig.phone}`;
