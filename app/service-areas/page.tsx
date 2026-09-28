import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { serviceAreas } from "../site-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Blackhorn Security provides armed, unarmed, and mobile patrol security services throughout Naples, Fort Myers, and Southwest Florida.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Service Areas | Blackhorn Security",
    description:
      "Blackhorn Security provides armed, unarmed, and mobile patrol security services throughout Naples, Fort Myers, and Southwest Florida.",
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Service Areas</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Security Services Across Southwest Florida
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Blackhorn Security provides armed, unarmed, and mobile patrol security services throughout Naples, Fort Myers, and surrounding Southwest Florida communities.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-3xl border border-white/10 bg-[#0A1628] p-7 transition duration-200 hover:border-blue-500/60 hover:-translate-y-1"
              >
                <h2 className="text-2xl font-semibold text-white">{area.name}</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">{area.summary}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                  View {area.name} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
