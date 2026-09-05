import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Expertise } from "@/components/expertise";
import { TeamGrid } from "@/components/team-grid";
import { Reveal } from "@/components/reveal";
import { CONTACT_EMAIL, MAILTO_HREF } from "@/lib/contact";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-white/6 border-t bg-[#08080a]" id="about">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <Reveal>
            <p className="eyebrow">About us</p>
            <h2 className="mt-4 font-heading font-semibold text-3xl text-white sm:text-4xl">
              Committed to excellence.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-[15px] text-white/55 leading-relaxed">
              <p>
                MCUBES Consultancy Sdn Bhd is an independent private limited company
                operating mainly from Peninsular Malaysia since 2017. It provides
                consulting services across a wide spectrum of sectors including
                engineering, utility, technology, sustainable development, management
                and international collaborations.
              </p>
              <p>
                The focus of our experienced team is to provide clients with strategic
                and accurate technical advice, while ensuring a flexible and innovative
                approach that satisfies the varying needs of each client on a personal
                scale.
              </p>
              <p className="text-white/70">
                All our services are led and handled hands-on by our highly experienced
                senior consultant, with a passion to deliver a high quality and
                excellent level of service — usually to the most demanding timescale.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-white/6 border-t bg-[#060608]" id="services">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <Services />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-white/8 bg-linear-to-r from-brand/8 to-transparent p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-heading font-semibold text-lg text-white">
                  Something else in mind?
                </h3>
                <p className="mt-2 max-w-lg text-sm text-white/50 leading-relaxed">
                  Our engagements are shaped around each client — at national and
                  international level, across both public and private sectors.
                </p>
              </div>
              <Link
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-[#1a1405] text-sm transition-all hover:bg-brand-soft"
                href="#contact"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-white/6 border-t bg-[#08080a]" id="expertise">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow">Expertise</p>
            <h2 className="mt-4 max-w-2xl font-heading font-semibold text-3xl text-white sm:text-4xl">
              What we bring to the table.
            </h2>
          </Reveal>
          <div className="mt-12">
            <Expertise />
          </div>
        </div>
      </section>

      <section className="border-white/6 border-t bg-[#060608]" id="team">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="eyebrow">Meet our team</p>
            <h2 className="mt-4 max-w-2xl font-heading font-semibold text-3xl text-white sm:text-4xl">
              Led hands-on, personally.
            </h2>
          </Reveal>

          <div className="mt-12">
            <TeamGrid />
          </div>
        </div>
      </section>

      <section className="border-white/6 border-t bg-[#08080a]" id="contact">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="eyebrow">Contact us</p>
            <h2 className="mt-4 font-heading font-semibold text-3xl text-white sm:text-4xl">
              Let&apos;s talk about your project.
            </h2>
            <p className="mt-5 max-w-md text-[15px] text-white/55 leading-relaxed">
              Tell us briefly what you need advice on and we&apos;ll come back to you
              directly.
            </p>

            <ul className="mt-10 space-y-5" data-contact-list>
              <li>
                <a
                  className="group flex items-center gap-4"
                  href="mailto:mcubescsb@gmail.com"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/20">
                    <Mail className="h-4 w-4 text-brand" />
                  </span>
                  <span>
                    <span className="block text-[11px] text-white/35 uppercase tracking-[0.18em]">
                      Email
                    </span>
                    <span className="text-[15px] text-white/70 transition-colors group-hover:text-brand">
                      mcubescsb@gmail.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center gap-4" href="tel:+60193114372">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/20">
                    <Phone className="h-4 w-4 text-brand" />
                  </span>
                  <span>
                    <span className="block text-[11px] text-white/35 uppercase tracking-[0.18em]">
                      Phone
                    </span>
                    <span className="text-[15px] text-white/70 transition-colors group-hover:text-brand">
                      +60 19-311 4372
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 ring-1 ring-brand/20">
                  <MapPin className="h-4 w-4 text-brand" />
                </span>
                <span>
                  <span className="block text-[11px] text-white/35 uppercase tracking-[0.18em]">
                    Location
                  </span>
                  <span className="text-[15px] text-white/70">
                    Peninsular Malaysia
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-brand/10 via-white/2 to-transparent p-8 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl"
              />
              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/12 ring-1 ring-brand/25">
                  <Mail className="h-5 w-5 text-brand" />
                </span>
                <h3 className="mt-6 font-heading font-semibold text-xl text-white">
                  Send us an email
                </h3>
                <p className="mt-3 max-w-sm text-[14.5px] text-white/55 leading-relaxed">
                  Click below and your email app will open with a short template ready
                  to fill in — or write to us directly at{" "}
                  <span className="text-white/75">{CONTACT_EMAIL}</span>.
                </p>
                <a
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-[#1a1405] text-sm transition-all hover:bg-brand-soft hover:shadow-[0_0_36px_-8px] hover:shadow-brand/70"
                  href={MAILTO_HREF}
                >
                  <Mail className="h-4 w-4" />
                  Email MCUBES Consultancy
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-6 text-[13px] text-white/35 leading-relaxed">
                  Prefer to talk? Call{" "}
                  <a
                    className="text-white/60 underline-offset-4 transition-colors hover:text-brand hover:underline"
                    href="tel:+60193114372"
                  >
                    +60 19-311 4372
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
