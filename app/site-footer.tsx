import Image from "next/image";
import Link from "next/link";
import { linktreeUrl } from "./site-data";

export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#05070A]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Image
            src="/homej.png"
            alt="Blackhorn Security logo"
            width={160}
            height={160}
            className="h-14 w-auto object-contain"
          />
          <h3 className="mt-4 text-2xl font-bold text-white">Blackhorn Security</h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Professional security services for businesses, properties, communities, and events throughout Southwest Florida.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Company</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link href="/#about" className="hover:text-blue-300">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
            <li><Link href="/service-areas" className="hover:text-blue-300">Service Areas</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-300">Contact</Link></li>
            <li><Link href="/#request-quote" className="hover:text-blue-300">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><a href="tel:2392048938" className="hover:text-blue-300">(239) 204-8938</a></li>
            <li><a href="mailto:blackhornsecserv@gmail.com" className="hover:text-blue-300">blackhornsecserv@gmail.com</a></li>
            <li>1232 North Tamiami Trail, Unit #09</li>
            <li>Florida Security Agency License #B1800337</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Service Info</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>Serving Naples, Fort Myers &amp; Southwest Florida</li>
            <li>24/7 Security Services</li>
            <li>Instagram: @blackhornsecurityservices</li>
            <li>Facebook: Blackhorn Security Services</li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/christian-lepe-blackhorn-security-services-llc-6b3039253?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-300"
              >
                Blackhorn Security
              </a>
            </li>
            <li>
              Linktree:{" "}
              <a
                href={linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-blue-300"
              >
                Blackhorn Security Services
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-400 sm:px-6 lg:px-8">
          <p>© 2026 Blackhorn Security</p>
          <p className="mt-4 text-center text-xs text-slate-500 sm:text-right">
            Website designed &amp; developed by{" "}
            <a
              href="https://www.linkedin.com/in/raul-montalvo-49a747402/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-slate-400 transition-colors hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Raul Montalvo · LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
