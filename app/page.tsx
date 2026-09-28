import BlackhornCarousel from "./blackhorn-carousel";
import Link from "next/link";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import QuoteForm from "./quote-form";
import { services, serviceAreas } from "./site-data";

const industries = [
  "Commercial Properties",
  "Residential Communities / HOAs",
  "Construction Sites",
  "Retail Locations",
  "Events",
  "Parking Areas",
  "Offices",
  "Other Private Properties",
];

const keyPoints = [
  {
    title: "Professional Presence",
    description:
      "Blackhorn Security delivers a visible, dependable security presence that supports safety, accountability, and peace of mind.",
  },
  {
    title: "Flexible Security Solutions",
    description:
      "Security services can be tailored to match the requirements of different properties, communities, and operations.",
  },
  {
    title: "Local Service",
    description:
      "Serving Naples, Fort Myers, and surrounding Southwest Florida communities with professional security support.",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#05070A] text-white">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(5,7,10,0.82) 0%, rgba(5,7,10,0.72) 30%, rgba(5,7,10,0.44) 55%, rgba(5,7,10,0.55) 100%), url('/home.png')",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,115,230,0.15),transparent_35%)]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                Professional Security Services
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Professional Security. When It Matters Most.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Armed, unarmed, and mobile patrol security services serving Naples, Fort Myers, and Southwest Florida.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#request-quote"
                  className="inline-flex items-center justify-center rounded-full bg-[#1473E6] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_35px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-blue-400/60 hover:text-blue-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[20rem] rounded-[24px] border border-white/10 bg-[#0B0F14]/80 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:max-w-[22rem]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-xs">
                  Security Coverage
                </p>
                <div className="mt-3 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] text-slate-300 sm:text-sm">Service Area</p>
                    <p className="mt-1 text-base font-semibold text-white sm:text-lg">Southwest Florida</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] text-slate-300 sm:text-sm">Contact</p>
                    <p className="mt-1 text-base font-semibold text-white sm:text-lg">(239) 204-8938</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] text-slate-300 sm:text-sm">Availability</p>
                    <p className="mt-1 text-base font-semibold text-white sm:text-lg">24/7 Security Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Why Blackhorn</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Reliable security support for businesses, properties, and communities.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Blackhorn Security provides professional security services for properties and operations that need a credible, visible, and dependable presence. Our approach is built around professionalism, visibility, and practical security solutions tailored to the needs of each client.
              </p>
              <a
                href="https://youtu.be/mTthIMjNGKQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-3 rounded-full border border-blue-500/40 bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(20,115,230,0.25)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(20,115,230,0.35)] sm:text-base"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-white"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span>Watch Blackhorn Security in Action</span>
              </a>
            </div>
            <BlackhornCarousel />
          </div>
        </section>

        <section id="services" className="border-t border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Our Services</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Security services built for real-world needs.
                </h2>
              </div>
              <a href="#request-quote" className="text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                Request a Quote →
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.name}
                  className="group rounded-3xl border border-white/10 bg-[#0A1628] p-6 transition duration-200 hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,115,230,0.15)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-[0_12px_28px_rgba(20,115,230,0.25)]">
                    {service.badge}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
                  <Link href={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-[position:72%_center] md:bg-[position:62%_center]"
            style={{ backgroundImage: "url('/blackhorn-approach.png')" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#05070A]/15 bg-[linear-gradient(180deg,rgba(5,7,10,0.26)_0%,rgba(5,7,10,0.12)_38%,transparent_66%)] md:bg-[radial-gradient(ellipse_at_22%_46%,rgba(5,7,10,0.22)_0%,rgba(5,7,10,0.12)_42%,transparent_72%)]"
          />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="lg:w-1/2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Our Approach</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Security that is professional, visible, and dependable.
                </h2>
              </div>
              <div className="grid gap-6 lg:w-1/2">
                {keyPoints.map((point) => (
                  <div key={point.title} className="rounded-2xl border border-white/10 bg-[#0B0F14] p-5">
                    <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-base leading-7 text-slate-300">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(20,115,230,0.18),transparent_25%),#0A1628] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Mobile Patrol</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Visible patrol coverage for properties that need regular checks and presence.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Mobile patrol services can support routine property checks, parking areas, residential communities, construction sites, and commercial spaces with a professional security presence that helps deter issues and support ongoing site visibility.
              </p>
              <a
                href="#request-quote"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1473E6] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#2589FF]"
              >
                Request Patrol Services
              </a>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#05070A]/80 p-6 shadow-[0_25px_50px_rgba(0,0,0,0.35)]">
              <ul className="space-y-4 text-slate-200">
                {[
                  "Property checks",
                  "Parking areas",
                  "Commercial properties",
                  "Residential communities",
                  "Construction sites",
                  "Visible security presence",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-sm text-blue-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Industries & Properties</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Security coverage for diverse property types and operations.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry} className="rounded-2xl border border-white/10 bg-[#0B0F14] p-5 text-base font-medium text-slate-200">
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section id="service-areas" className="border-t border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Service Areas</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Professional Security Services Across Southwest Florida
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Blackhorn Security provides armed, unarmed, and mobile patrol security services throughout Naples, Fort Myers, and surrounding Southwest Florida communities.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={`/service-areas/${area.slug}`}
                  className="group rounded-3xl border border-white/10 bg-[#0A1628] p-7 transition duration-200 hover:border-blue-500/60 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{area.name}</h3>
                    <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                      Local
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-300">{area.summary}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                    View {area.name} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-blue-500/25 bg-gradient-to-r from-[#0A1628] to-[#0B0F14] p-8 shadow-[0_25px_60px_rgba(20,115,230,0.12)] sm:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Need Professional Security?</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Need professional security for your property or business?
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Discuss your security needs with Blackhorn Security and request a quote for services tailored to your property, business, or community.
                </p>
              </div>
              <a
                href="#request-quote"
                className="inline-flex items-center justify-center rounded-full bg-[#1473E6] px-6 py-3.5 text-base font-semibold text-white shadow-[0_14px_35px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        <section id="request-quote" className="border-t border-white/10 bg-[#0B0F14] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Request Security</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Tell us about your security needs.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Share your property details, service needs, and preferred timeline. Our team will follow up shortly.
                </p>
                <div className="mt-8 space-y-4 text-slate-300">
                  <p>Call: <a href="tel:2392048938" className="font-semibold text-blue-400 hover:text-blue-300">(239) 204-8938</a></p>
                  <p>Email: <a href="mailto:blackhornsecserv@gmail.com" className="font-semibold text-blue-400 hover:text-blue-300">blackhornsecserv@gmail.com</a></p>
                  <p>Hours: <span className="font-semibold text-white">24/7 Security Services</span></p>
                </div>
              </div>

              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
