"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const POINTS = [
  "In-depth knowledge of the regulations, policies and strategies shaping the ever-changing energy utility landscape.",
  "Clear understanding of the interplay between departments in relation to electricity supply.",
  "Broad industry and professional networks across Malaysia and the wider region.",
  "Vast knowledge of how the main electricity bodies operate in other jurisdictions.",
  "More than 30 years of experience in the energy industry, principally electricity supply.",
  "In-depth knowledge of Advanced Metering Infrastructure (AMI), commonly known as smart metering.",
  "Strong negotiation skills at commercial and stakeholder level.",
  "Attention to detail, with a hands-on and personalised approach to every engagement.",
];

export function Expertise() {
  return (
    <ul className="grid gap-x-10 gap-y-1 sm:grid-cols-2">
      {POINTS.map((point, i) => (
        <motion.li
          className="flex items-start gap-4 border-white/6 border-b py-5 last:border-0 sm:[&:nth-last-child(2)]:border-0"
          initial={{ opacity: 0, y: 16 }}
          key={point}
          transition={{
            duration: 0.55,
            delay: (i % 4) * 0.07,
            ease: [0.25, 0.4, 0.25, 1] as const,
          }}
          viewport={{ once: true, margin: "-60px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/12 ring-1 ring-brand/25">
            <Check className="h-3.5 w-3.5 text-brand" strokeWidth={2.5} />
          </span>
          <p className="text-[14.5px] text-white/55 leading-relaxed">{point}</p>
        </motion.li>
      ))}
    </ul>
  );
}
