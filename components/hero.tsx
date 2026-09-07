"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ShapeBackdrop } from "@/components/kokonutui/shape-hero";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.35 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

const STATS = [
  { value: "30+", label: "Years in electricity supply" },
  { value: "7", label: "Advisory disciplines" },
  { value: "2017", label: "Independent since" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-[#08080a]">
      <ShapeBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <motion.p
            animate="visible"
            className="eyebrow"
            custom={0}
            initial="hidden"
            variants={fadeUp}
          >
            Independent advisory · Malaysia · Since 2017
          </motion.p>

          <motion.h1
            animate="visible"
            className="mt-6 font-heading font-semibold text-4xl text-white leading-[1.08] sm:text-6xl md:text-7xl"
            custom={1}
            initial="hidden"
            variants={fadeUp}
          >
            Strategic clarity for the{" "}
            <span className="bg-linear-to-r from-brand-soft via-brand to-brand-deep bg-clip-text text-transparent">
              energy and utility
            </span>{" "}
            sector.
          </motion.h1>

          <motion.p
            animate="visible"
            className="mt-7 max-w-2xl text-base text-white/55 leading-relaxed sm:text-lg"
            custom={2}
            initial="hidden"
            variants={fadeUp}
          >
            MCUBES Consultancy delivers precise technical and commercial advice across
            engineering, utility, technology and sustainable development — led hands-on
            by a senior consultant with over three decades in electricity supply.
          </motion.p>

          <motion.div
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
            custom={3}
            initial="hidden"
            variants={fadeUp}
          >
            <Link
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-[#1a1405] text-sm transition-all hover:bg-brand-soft hover:shadow-[0_0_36px_-8px] hover:shadow-brand/70"
              href="#contact"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white/70 ring-1 ring-white/15 transition-colors hover:bg-white/5 hover:text-white"
              href="#services"
            >
              Explore services
            </Link>
          </motion.div>

          <motion.dl
            animate="visible"
            className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-white/10 border-t pt-8"
            custom={4}
            initial="hidden"
            variants={fadeUp}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-heading font-semibold text-2xl text-brand sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-[13px] text-white/50 leading-snug">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#08080a] to-transparent" />
    </section>
  );
}
