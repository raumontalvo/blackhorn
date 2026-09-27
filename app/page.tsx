import Image from "next/image";
import BlackhornCarousel from "./blackhorn-carousel";

const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Contact", href: "#contact" },
  { label: "Request a Quote", href: "#request-quote" },
];

const services = [
  { name: "Armed Security", summary: "Visible, professional protection for properties and facilities that require an elevated security presence.", badge: "A" },
  { name: "Unarmed Security", summary: "Trusted front-line security for offices, retail locations, and commercial properties.", badge: "U" },
  { name: "Mobile Patrol", summary: "Routine checks and visible security presence for properties, communities, and construction sites.", badge: "MP" },
  { name: "Commercial Security", summary: "Security coverage designed for businesses, office spaces, and multi-site operations.", badge: "C" },
  { name: "Residential / HOA Security", summary: "Professional monitoring and patrol support for residential communities and HOA-managed properties.", badge: "R" },
  { name: "Construction Site Security", summary: "Deterrence, access control, and patrol support for active job sites and restricted areas.", badge: "CS" },
  { name: "Event Security", summary: "Security plans that support organized events with smooth guest flow and visible oversight.", badge: "E" },
  { name: "Retail Security", summary: "Loss prevention support and customer-focused security for retail environments.", badge: "RS" },
];

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

const serviceAreas = [
  {
    name: "Naples",
    description: "Professional security services for commercial, residential, and private property environments in Naples.",
  },
  {
    name: "Fort Myers",
    description: "Security coverage and patrol services designed for properties and businesses throughout Fort Myers.",
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#05070A] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070A]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Blackhorn Security home">
            <Image
              src="/homej.png"
              alt="Blackhorn Security logo"
              width={180}
              height={180}
              priority
              className="h-16 w-auto object-contain sm:h-20"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-blue-400 ${
                  item.label === "Request a Quote" ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:2392048938"
              className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-400"
            >
              (239) 204-8938
            </a>
            <a
              href="#request-quote"
              className="inline-flex items-center justify-center rounded-full bg-[#1473E6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
            >
              Request a Quote
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

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
                  <a href="#request-quote" className="mt-5 inline-flex text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
                    Learn More →
                  </a>
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
                <div key={area.name} className="rounded-3xl border border-white/10 bg-[#0A1628] p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{area.name}</h3>
                    <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                      Local
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-300">{area.description}</p>
                </div>
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
                  Share your property details, service needs, and preferred timeline. This form is frontend-only for now and will be connected to a backend solution once the intake process is defined.
                </p>
                <div className="mt-8 space-y-4 text-slate-300">
                  <p>Call: <a href="tel:2392048938" className="font-semibold text-blue-400 hover:text-blue-300">(239) 204-8938</a></p>
                  <p>Email: <a href="mailto:blackhornsecserv@gmail.com" className="font-semibold text-blue-400 hover:text-blue-300">blackhornsecserv@gmail.com</a></p>
                  <p>Hours: <span className="font-semibold text-white">24/7 Security Services</span></p>
                </div>
              </div>

              <form className="rounded-[28px] border border-white/10 bg-[#0A1628] p-6 sm:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
                    <input id="fullName" type="text" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">Company / Organization</label>
                    <input id="company" type="text" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Company or organization" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">Phone Number</label>
                    <input id="phone" type="tel" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="(239) 204-8938" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email Address</label>
                    <input id="email" type="email" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="name@email.com" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">Service Needed</label>
                    <input id="service" type="text" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Armed Security" />
                  </div>
                  <div>
                    <label htmlFor="siteType" className="mb-2 block text-sm font-medium text-slate-200">Property / Site Type</label>
                    <input id="siteType" type="text" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Commercial property" />
                  </div>
                  <div>
                    <label htmlFor="city" className="mb-2 block text-sm font-medium text-slate-200">City</label>
                    <input id="city" type="text" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Naples" />
                  </div>
                  <div>
                    <label htmlFor="startDate" className="mb-2 block text-sm font-medium text-slate-200">Desired Start Date</label>
                    <input id="startDate" type="date" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="coverage" className="mb-2 block text-sm font-medium text-slate-200">Estimated Coverage / Hours</label>
                    <input id="coverage" type="text" className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="e.g. 12 hours / 7 days a week" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message / Security Needs</label>
                    <textarea id="message" rows={5} className="w-full rounded-xl border border-white/10 bg-[#05070A] px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Tell us about the property, your security concerns, and services needed." />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1473E6] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_35px_rgba(20,115,230,0.35)] transition hover:bg-[#2589FF]"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

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
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#service-areas" className="hover:text-blue-300">Service Areas</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="#request-quote" className="hover:text-blue-300">Request a Quote</a></li>
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
    </div>
  );
}
