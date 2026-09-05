"use client";

import {
  Building2,
  Cpu,
  Gauge,
  Lightbulb,
  Network,
  Sun,
  Zap,
} from "lucide-react";
import SpotlightCards, {
  type SpotlightItem,
} from "@/components/kokonutui/spotlight-cards";

const GOLD = "#e3b45c";
const TEAL = "#4aa8a5";
const AMBER = "#d98a3d";

const SERVICES: SpotlightItem[] = [
  {
    icon: Network,
    title: "Utility",
    description:
      "Regulatory, operational and commercial advisory for power utility businesses navigating a shifting energy landscape.",
    color: GOLD,
  },
  {
    icon: Building2,
    title: "Construction & Building",
    description:
      "Technical guidance across project planning, delivery and stakeholder coordination on infrastructure works.",
    color: TEAL,
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "Distribution and transmission expertise grounded in three decades of hands-on utility practice.",
    color: AMBER,
  },
  {
    icon: Sun,
    title: "Solar Energy & Engineering",
    description:
      "Renewable generation advisory aligned to national policy, grid realities and commercial viability.",
    color: GOLD,
  },
  {
    icon: Cpu,
    title: "Information Technology",
    description:
      "Systems and digital transformation advisory for utility-scale operations and back-office modernisation.",
    color: TEAL,
  },
  {
    icon: Gauge,
    title: "Smart Metering Technology",
    description:
      "Advanced Metering Infrastructure (AMI) strategy — from pilot design through to national-scale rollout.",
    color: AMBER,
  },
  {
    icon: Lightbulb,
    title: "Management Advisory",
    description:
      "Organisational design, negotiation support and executive counsel for public and private sector clients.",
    color: GOLD,
  },
];

export function Services() {
  return (
    <SpotlightCards
      eyebrow="Our services"
      heading="Advisory across the energy value chain."
      items={SERVICES}
    />
  );
}
