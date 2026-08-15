export interface Course {
  name: string;
  audience: string;
  features: string[];
  popular?: boolean;
}

export const courses: Course[] = [
  {
    name: "Beginner Course",
    audience: "For people who have never driven before.",
    features: [
      "Basic car controls",
      "Steering technique",
      "Clutch control",
      "Gear shifting",
      "Braking smoothly",
      "Turning & junctions",
      "Traffic signals",
      "Parking basics",
    ],
  },
  {
    name: "Refresher Course",
    audience: "For existing licence holders regaining confidence.",
    features: [
      "City traffic driving",
      "Lane changes",
      "Parking & reverse",
      "Reverse driving",
      "Junction handling",
      "Highway confidence",
      "Defensive driving",
    ],
    popular: true,
  },
  {
    name: "Advanced Course",
    audience: "For drivers wanting advanced real-world skills.",
    features: [
      "Highway driving",
      "Night driving",
      "Defensive driving",
      "Heavy traffic handling",
      "Advanced parking",
      "Emergency handling",
    ],
  },
];
