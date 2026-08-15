import {
  ShipWheel, Disc3, Gauge, Square, CornerUpRight, RefreshCcw,
  ArrowLeftRight, TrafficCone, ParkingSquare, Move3d, Car, ShieldCheck,
  Moon, Eye, Route,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const topics: { label: string; icon: LucideIcon }[] = [
  { label: "Steering Control", icon: ShipWheel },
  { label: "Clutch Control", icon: Disc3 },
  { label: "Gear Shifting", icon: Gauge },
  { label: "Braking", icon: Square },
  { label: "Turning", icon: CornerUpRight },
  { label: "U-Turns", icon: RefreshCcw },
  { label: "Lane Changing", icon: ArrowLeftRight },
  { label: "Traffic Signals", icon: TrafficCone },
  { label: "Parking", icon: ParkingSquare },
  { label: "Reverse Parking", icon: Move3d },
  { label: "Parallel Parking", icon: Car },
  { label: "Highway Driving", icon: Route },
  { label: "Defensive Driving", icon: ShieldCheck },
  { label: "Night Driving", icon: Moon },
  { label: "Traffic Awareness", icon: Eye },
];

export default function TrainingTopics() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training Topics"
          title="What You'll Learn"
          subtitle="A comprehensive curriculum covering every essential driving skill."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {topics.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.label}
                className="flex flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="text-xs font-semibold text-slate-700 sm:text-sm">{t.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
