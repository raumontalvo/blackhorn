import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../site-header";
import SiteFooter from "../../site-footer";
import { services } from "../../site-data";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  const title = `${service.name} Services in Southwest Florida`;
  return {
    title,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${title} | Blackhorn Security`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
              ← All Services
            </Link>
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-xl font-bold text-white shadow-[0_12px_28px_rgba(20,115,230,0.25)]">
                {service.badge}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {service.name} Services in Southwest Florida
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{service.description}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#request-quote"
                className="inline-flex items-center justify-center rounded-full bg-[#1473E6] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_35px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
              >
                Request a Quote
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-blue-400/60 hover:text-blue-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What this service includes</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-sm text-blue-300">✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0A1628] p-7">
            <h2 className="text-2xl font-semibold text-white">Available in Naples &amp; Fort Myers</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              This service is available throughout Southwest Florida, including our core service areas.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <Link href="/service-areas/naples" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                Security Services in Naples →
              </Link>
              <Link href="/service-areas/fort-myers" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                Security Services in Fort Myers →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
