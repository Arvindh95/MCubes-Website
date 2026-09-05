"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TEAM } from "@/lib/team";

export function TeamGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((member, i) => (
        <motion.article
          className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-6 transition-colors hover:border-brand/25"
          initial={{ opacity: 0, y: 22 }}
          key={member.slug}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.25, 0.4, 0.25, 1] as const,
          }}
          viewport={{ once: true, margin: "-70px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-brand/6 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10 transition-all duration-500 group-hover:ring-brand/40">
            <Image
              alt={member.name}
              className={cn("object-cover", member.focus ?? "object-center")}
              fill
              sizes="112px"
              src={member.photo}
            />
          </div>

          <div className="relative mt-5 text-center">
            <h3 className="font-heading font-semibold text-[15.5px] text-white leading-snug">
              {member.name}
            </h3>
            <p className="mt-1.5 text-[13px] text-brand">{member.role}</p>
            <p className="mt-3 text-[12.5px] text-white/40 leading-relaxed">
              {member.credentials}
            </p>

            {member.bio && (
              <Link
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-white/50 transition-colors hover:text-brand"
                href={`/consultants#${member.slug}`}
              >
                Full profile
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
