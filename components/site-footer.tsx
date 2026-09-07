import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-white/10 border-t bg-[#060608]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo className="h-12" />
          <p className="mt-4 max-w-xs text-sm text-white/50 leading-relaxed">
            MCUBES Consultancy Sdn Bhd — independent advisory in energy, utility,
            engineering and technology, operating from Peninsular Malaysia since 2017.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-medium text-[13px] text-white/80">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { href: "/#about", label: "About us" },
              { href: "/#services", label: "Our services" },
              { href: "/#expertise", label: "Expertise" },
              { href: "/consultants", label: "Our consultants" },
              { href: "/#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  className="text-white/50 transition-colors hover:text-brand"
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-medium text-[13px] text-white/80">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                className="flex items-center gap-2.5 text-white/50 transition-colors hover:text-brand"
                href="mailto:mcubescsb@gmail.com"
              >
                <Mail className="h-4 w-4 shrink-0" />
                mcubescsb@gmail.com
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-2.5 text-white/50 transition-colors hover:text-brand"
                href="tel:+60193114372"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +60 19-311 4372
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/50">
              <MapPin className="h-4 w-4 shrink-0" />
              Peninsular Malaysia
            </li>
          </ul>
        </div>
      </div>

      <div className="border-white/10 border-t">
        <p className="mx-auto max-w-6xl px-5 py-6 text-[13px] text-white/50 sm:px-8">
          &copy; {new Date().getFullYear()} MCUBES Consultancy Sdn Bhd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
