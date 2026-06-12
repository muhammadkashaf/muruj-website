import {
  Cloud,
  CloudRain,
  CloudSun,
  Droplets,
  Eye,
  Route,
  Shield,
  Sun,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const weatherMetrics = [
  { icon: CloudSun, label: "Feels like", value: "10°C" },
  { icon: Droplets, label: "Humidity", value: "62%" },
  { icon: Wind, label: "Wind", value: "10 km/h" },
] as const;

export const forecast = [
  { day: "Tue", high: "16°", low: "8°", icon: CloudSun },
  { day: "Wed", high: "15°", low: "2°", icon: Sun },
  { day: "Thu", high: "16°", low: "5°", icon: Cloud },
  { day: "Fri", high: "17°", low: "2°", icon: Sun },
  { day: "Sat", high: "18°", low: "7°", icon: CloudRain },
] as const;

export const routeChecks = [
  ["Airport road", "Open"],
  ["Kachura route", "Clear"],
  ["Deosai route", "Caution"],
] as const;

export const fuelPrices = [
  ["Petrol", "272.4"],
  ["Diesel", "264.1"],
  ["Hi-Octane", "298.8"],
] as const;

export const travelSignals: Array<{ icon: LucideIcon; label: string; value: string }> = [
  { icon: Route, label: "Roads", value: "Clear" },
  { icon: Eye, label: "Visibility", value: "Good" },
  { icon: Shield, label: "Risk level", value: "Low" },
];
