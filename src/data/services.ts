import { images } from "./images";
import {
  Car,
  RefreshCw,
  ShieldCheck,
  ParkingSquare,
  Route,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Car Driving Lessons",
    description: "Structured practical lessons for beginners covering controls, steering and road sense.",
    image: images.beginner,
    icon: Car,
  },
  {
    title: "Refresher Driving",
    description: "For licensed drivers who want to regain confidence behind the wheel after a break.",
    image: images.refresher,
    icon: RefreshCw,
  },
  {
    title: "Defensive Driving",
    description: "Learn hazard awareness, anticipation and safer driving habits for everyday roads.",
    image: images.defensive,
    icon: ShieldCheck,
  },
  {
    title: "Parking Practice",
    description: "Improve reverse, parallel and tight-space parking with focused manoeuvre training.",
    image: images.parking,
    icon: ParkingSquare,
  },
  {
    title: "Highway Driving",
    description: "Build confidence on higher-speed roads with lane discipline and safe overtaking.",
    image: images.highway,
    icon: Route,
  },
  {
    title: "Licence Assistance",
    description: "Step-by-step guidance through the driving licence application and test process.",
    image: images.licence,
    icon: FileText,
  },
];
