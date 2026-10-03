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

      <main className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url('/bk.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(5, 10, 20, 0.48), rgba(5, 10, 20, 0.64))",
          }}
        />
        <section className="relative z-10 border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-4 [text-shadow:0_2px_6px_rgba(0,0,0,0.85)] sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Service Areas</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Security Services Across Southwest Florida
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Blackhorn Security provides armed, unarmed, and mobile patrol security services throughout Naples, Fort Myers, and surrounding Southwest Florida communities.
            </p>
          </div>
        </section>

        <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group rounded-3xl border border-white/10 bg-[#0A1628]/85 p-7 backdrop-blur-sm transition duration-200 hover:border-blue-500/60 hover:-translate-y-1"
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
