import type { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Globe2, Mail } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { TEAM } from "@/lib/team";
import { MAILTO_HREF } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Consultants",
  description:
    "Meet the MCUBES Consultancy team — led by Dato' Mohandass S Nair, with over 30 years in Malaysia's power utility sector, alongside our directors, consultants and support staff.",
};

const HIGHLIGHT_ICONS = [GraduationCap, Award, Globe2];

const [lead, ...others] = TEAM;

export default function ConsultantsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-white/6 border-b bg-[#08080a]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-br from-brand/[0.07] via-transparent to-teal/[0.05]"
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8">
          <Reveal>
            <p className="eyebrow">Our consultants</p>
            <h1 className="mt-5 max-w-3xl font-heading font-semibold text-3xl text-white sm:text-5xl">
              The people behind MCUBES.
            </h1>
            <p className="mt-5 max-w-2xl text-[15.5px] text-white/55 leading-relaxed">
              A small, senior team — every engagement is handled personally rather
              than passed down a chain.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lead consultant — full profile */}
      <section className="bg-[#08080a]" id={lead.slug}>
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end">
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full ring-2 ring-brand/30 sm:h-44 sm:w-44">
                <Image
                  alt={lead.name}
                  className={cn("object-cover", lead.focus ?? "object-center")}
                  fill
                  priority
                  sizes="176px"
                  src={lead.photo}
                />
              </div>
              <div>
                <h2 className="font-heading font-semibold text-3xl text-white sm:text-4xl">
                  {lead.name}
                </h2>
                <p className="mt-3 text-brand sm:text-lg">{lead.role}</p>
                <p className="mt-2 text-[14px] text-white/50">{lead.credentials}</p>
              </div>
            </div>
          </Reveal>

          {lead.highlights && (
            <Reveal delay={0.08}>
              <dl className="mt-14 grid gap-4 sm:grid-cols-3">
                {lead.highlights.map(({ label, value }, i) => {
                  const Icon = HIGHLIGHT_ICONS[i] ?? GraduationCap;
                  return (
                    <div
                      className="rounded-2xl border border-white/8 bg-white/2 p-6"
                      key={label}
                    >
                      <dt className="flex items-center gap-2.5 text-[11px] text-white/55 uppercase tracking-[0.18em]">
                        <Icon className="h-4 w-4 text-brand" />
                        {label}
                      </dt>
                      <dd className="mt-3 text-[14.5px] text-white/65 leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Reveal>
          )}

          <div className="mt-14 max-w-3xl space-y-6">
            {lead.bio?.map((text, i) => (
              <Reveal delay={i * 0.05} key={text.slice(0, 40)}>
                <p className="text-[15.5px] text-white/55 leading-[1.85]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining team */}
      <section className="border-white/6 border-t bg-[#060608]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Reveal>
            <p className="eyebrow">The wider team</p>
            <h2 className="mt-4 font-heading font-semibold text-3xl text-white sm:text-4xl">
              Directors &amp; support.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((member, i) => (
              <Reveal delay={i * 0.08} key={member.slug}>
                <article
                  className="group flex h-full flex-col items-center gap-5 rounded-2xl border border-white/8 bg-white/2 p-8 text-center transition-colors hover:border-brand/25"
                  id={member.slug}
                >
                  <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10 transition-all duration-500 group-hover:ring-brand/40">
                    <Image
                      alt={member.name}
                      className={cn(
                        "object-cover",
                        member.focus ?? "object-center"
                      )}
                      fill
                      sizes="112px"
                      src={member.photo}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] text-brand">{member.role}</p>
                    <p className="mt-3 text-[13px] text-white/50 leading-relaxed">
                      {member.credentials}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-col items-start gap-5 rounded-2xl border border-white/8 bg-linear-to-r from-brand/8 to-transparent p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-[15px] text-white/60 leading-relaxed">
                Looking for senior advisory on an energy, utility or metering
                programme?
              </p>
              <a
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-[#1a1405] text-sm transition-all hover:bg-brand-soft"
                href={MAILTO_HREF}
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
