"use client";

/**
 * Adapted from Kokonut UI "shape-hero" (MIT) — https://kokonutui.com
 * @author: @dorianbaffier
 *
 * Reworked for MCUBES: exports the shape primitive and a brand-palette backdrop
 * so page-level components own their own copy and layout.
 */

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, rotate }}
      className={cn("absolute", className)}
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as const,
        opacity: { duration: 1.2 },
      }}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        className="relative"
        style={{ width, height }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            "ring-1 ring-white/[0.04]",
            "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]",
            "after:rounded-[inherit]"
          )}
          style={{ borderRadius }}
        />
      </motion.div>
    </motion.div>
  );
}

/** Floating geometric backdrop in the MCUBES gold/teal palette. */
export function ShapeBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-amber-500/[0.05] via-transparent to-teal-500/[0.05] blur-3xl" />

      <ElegantShape
        borderRadius={24}
        className="top-[-12%] left-[-14%]"
        delay={0.3}
        gradient="from-amber-500/[0.22]"
        height={520}
        rotate={-8}
        width={300}
      />
      <ElegantShape
        borderRadius={20}
        className="right-[-18%] bottom-[-8%]"
        delay={0.5}
        gradient="from-teal-500/[0.20]"
        height={210}
        rotate={15}
        width={600}
      />
      <ElegantShape
        borderRadius={32}
        className="top-[42%] left-[-6%]"
        delay={0.4}
        gradient="from-orange-500/[0.16]"
        height={300}
        rotate={24}
        width={300}
      />
      <ElegantShape
        borderRadius={12}
        className="top-[8%] right-[8%]"
        delay={0.6}
        gradient="from-amber-400/[0.24]"
        height={110}
        rotate={-20}
        width={260}
      />
      <ElegantShape
        borderRadius={18}
        className="top-[62%] left-[26%]"
        delay={0.75}
        gradient="from-cyan-500/[0.12]"
        height={120}
        rotate={-12}
        width={440}
      />
    </div>
  );
}
