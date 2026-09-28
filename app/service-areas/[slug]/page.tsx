import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../site-header";
import SiteFooter from "../../site-footer";
import { serviceAreas, services } from "../../site-data";

type Params = { slug: string };

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) return {};

  return {
    title: area.heading,
    description: area.summary,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: `${area.heading} | Blackhorn Security`,
      description: area.summary,
    },
  };
}

export default async function ServiceAreaDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = serviceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  return (
    <div className="min-h-screen bg-[#05070A] text-white">
      <SiteHeader />

      <main>
        <section className="border-b border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/service-areas" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
              ← All Service Areas
            </Link>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">{area.heading}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{area.description}</p>
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
          <h2 className="text-2xl font-semibold text-white">Properties &amp; businesses we support in {area.name}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {area.properties.map((property) => (
              <div key={property} className="rounded-2xl border border-white/10 bg-[#0B0F14] p-5 text-base font-medium text-slate-200">
                {property}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#0A1628] p-7">
            <h2 className="text-2xl font-semibold text-white">Services available in {area.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              All Blackhorn Security services are available for properties and businesses in {area.name}, including:
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  {service.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
