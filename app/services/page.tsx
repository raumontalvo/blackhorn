import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { services } from "../site-data";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    "Explore Blackhorn Security's armed, unarmed, mobile patrol, and specialized security services serving Naples, Fort Myers, and Southwest Florida.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Security Services | Blackhorn Security",
    description:
      "Explore Blackhorn Security's armed, unarmed, mobile patrol, and specialized security services serving Naples, Fort Myers, and Southwest Florida.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Our Services</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Security services built for real-world needs.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Blackhorn Security provides armed, unarmed, and mobile patrol security services throughout Naples, Fort Myers, and Southwest Florida. Explore each service below to learn how our officers can support your property or operation.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-3xl border border-white/10 bg-[#0A1628] p-6 transition duration-200 hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,115,230,0.15)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-[0_12px_28px_rgba(20,115,230,0.25)]">
                  {service.badge}
                </div>
                <h2 className="mt-6 text-xl font-semibold text-white">{service.name}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0B0F14] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-blue-500/25 bg-gradient-to-r from-[#0A1628] to-[#0B0F14] p-8 shadow-[0_25px_60px_rgba(20,115,230,0.12)] sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Need professional security for your property or business?
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-300">
                    Discuss your security needs with Blackhorn Security and request a quote tailored to your property, business, or community.
                  </p>
                </div>
                <Link
                  href="/#request-quote"
                  className="inline-flex items-center justify-center rounded-full bg-[#1473E6] px-6 py-3.5 text-base font-semibold text-white shadow-[0_14px_35px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
