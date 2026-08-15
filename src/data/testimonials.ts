export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aarthi R.",
    location: "Chennai",
    rating: 5,
    text: "Very patient and professional instructor. I was nervous about driving initially, but the training helped me become much more confident.",
  },
  {
    name: "Karthik S.",
    location: "Coimbatore",
    rating: 5,
    text: "The practical road training was excellent. I learned parking, lane discipline and highway driving within a few weeks.",
  },
  {
    name: "Divya M.",
    location: "Madurai",
    rating: 5,
    text: "Flexible timings worked perfectly for my office schedule. The instructor was calm and explained everything clearly.",
  },
  {
    name: "Rahul V.",
    location: "Chennai",
    rating: 5,
    text: "Best driving school experience. The refresher course helped me drive confidently after almost five years of not driving.",
  },
  {
    name: "Priya K.",
    location: "Trichy",
    rating: 4,
    text: "Good training with focus on safety. Parking practice was very useful and I cleared my road test on the first attempt.",
  },
  {
    name: "Suresh B.",
    location: "Salem",
    rating: 5,
    text: "Individual attention made a big difference. The instructor identified my weak areas and worked on them patiently.",
  },
];
