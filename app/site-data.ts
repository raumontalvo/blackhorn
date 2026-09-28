export const siteUrl = "https://blackhornsecurityservices.com";
export const businessName = "Blackhorn Security";

export const businessInfo = {
  name: businessName,
  phone: "(239) 204-8938",
  phoneHref: "tel:2392048938",
  email: "blackhornsecserv@gmail.com",
  addressLine: "1232 North Tamiami Trail, Unit #09",
  license: "Florida Security Agency License #B1800337",
  serviceArea: "Naples, Fort Myers, and Southwest Florida",
  // Only include profile URLs that are explicitly verified elsewhere on the site (LinkedIn).
  // Instagram/Facebook are only referenced as handles/names, not confirmed URLs, so they are omitted here.
  sameAs: [
    "https://www.linkedin.com/in/christian-lepe-blackhorn-security-services-llc-6b3039253",
  ],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/#contact" },
  { label: "Request a Quote", href: "/#request-quote" },
];

export type ServiceInfo = {
  slug: string;
  name: string;
  badge: string;
  summary: string;
  description: string;
  bullets: string[];
};

export const services: ServiceInfo[] = [
  {
    slug: "armed-security",
    name: "Armed Security",
    badge: "A",
    summary: "Visible, professional protection for properties and facilities that require an elevated security presence.",
    description:
      "Blackhorn Security provides armed security officers for properties, facilities, and operations that require an elevated, visible level of protection. Our armed officers are positioned to support deterrence, monitoring, and rapid response for the site they are assigned to.",
    bullets: [
      "Visible deterrence for higher-risk properties",
      "Trained, professional armed officers",
      "Coordinated coverage for commercial and private sites",
      "Support for access control and incident response",
    ],
  },
  {
    slug: "unarmed-security",
    name: "Unarmed Security",
    badge: "U",
    summary: "Trusted front-line security for offices, retail locations, and commercial properties.",
    description:
      "Unarmed security officers provide a professional, front-line presence for offices, retail locations, and commercial properties. This service is well suited for day-to-day monitoring, customer-facing environments, and properties that need a dependable security presence without an armed posture.",
    bullets: [
      "Professional front-desk and property presence",
      "Customer-facing monitoring for offices and retail",
      "Access control and visitor oversight",
      "Consistent, dependable daily coverage",
    ],
  },
  {
    slug: "mobile-patrol",
    name: "Mobile Patrol",
    badge: "MP",
    summary: "Routine checks and visible security presence for properties, communities, and construction sites.",
    description:
      "Mobile patrol services support routine property checks, parking areas, residential communities, and construction sites with scheduled drive-by or walking patrols. This gives properties a visible, professional security presence without requiring a stationed officer around the clock.",
    bullets: [
      "Scheduled property checks and patrol logs",
      "Coverage for parking areas and common spaces",
      "Support for residential communities and construction sites",
      "Deterrence through visible, recurring presence",
    ],
  },
  {
    slug: "commercial-security",
    name: "Commercial Property Security",
    badge: "C",
    summary: "Security coverage designed for businesses, office spaces, and multi-site operations.",
    description:
      "Commercial property security from Blackhorn Security is designed for businesses, office spaces, and multi-site operations that need consistent coverage. Officers help maintain a professional, secure environment for staff, tenants, and visitors.",
    bullets: [
      "Coverage for offices, business parks, and multi-tenant sites",
      "Support for staff and visitor safety",
      "Consistent scheduling across multiple locations",
      "Professional presence aligned with business operations",
    ],
  },
  {
    slug: "residential-hoa-security",
    name: "Residential / HOA Security",
    badge: "R",
    summary: "Professional monitoring and patrol support for residential communities and HOA-managed properties.",
    description:
      "Blackhorn Security supports residential communities and HOA-managed properties with monitoring and patrol services designed to help residents feel safe. Coverage can be tailored to community entrances, common areas, and neighborhood patrol routes.",
    bullets: [
      "Patrol support for neighborhoods and gated communities",
      "Coverage for community entrances and common areas",
      "Coordination with HOA boards and property managers",
      "Consistent, professional resident-facing presence",
    ],
  },
  {
    slug: "construction-site-security",
    name: "Construction Site Security",
    badge: "CS",
    summary: "Deterrence, access control, and patrol support for active job sites and restricted areas.",
    description:
      "Active job sites face risks from theft, vandalism, and unauthorized access. Blackhorn Security provides deterrence, access control, and patrol support for construction sites and restricted areas to help protect equipment, materials, and the site itself.",
    bullets: [
      "Deterrence against theft and vandalism",
      "Access control for restricted job site areas",
      "Patrol coverage during off-hours",
      "Support for equipment and material protection",
    ],
  },
  {
    slug: "event-security",
    name: "Event Security",
    badge: "E",
    summary: "Security plans that support organized events with smooth guest flow and visible oversight.",
    description:
      "Blackhorn Security supports organized events with a security presence that helps maintain smooth guest flow and visible oversight. Coverage can be planned around the size, layout, and needs of the specific event.",
    bullets: [
      "Planning support for event-specific security needs",
      "Guest flow and entrance monitoring",
      "Visible oversight throughout the event",
      "Coordination with event organizers and venue staff",
    ],
  },
  {
    slug: "retail-security",
    name: "Retail Security",
    badge: "RS",
    summary: "Loss prevention support and customer-focused security for retail environments.",
    description:
      "Retail environments benefit from a visible, customer-focused security presence that supports loss prevention and helps maintain a safe shopping environment for customers and staff.",
    bullets: [
      "Loss prevention support for retail locations",
      "Customer-focused, approachable presence",
      "Monitoring of entrances and high-traffic areas",
      "Coordination with store management",
    ],
  },
  {
    slug: "parking-lot-patrols",
    name: "Parking Lot / Property Patrols",
    badge: "P",
    summary: "Routine patrols and visible presence for parking areas and shared property spaces.",
    description:
      "Parking areas and shared property spaces benefit from routine patrol coverage that helps deter issues and support a safer environment for tenants, customers, and visitors moving through the property.",
    bullets: [
      "Routine patrols of parking areas and lots",
      "Visible presence during high-traffic hours",
      "Support for property managers and businesses",
      "Coverage that complements existing site security",
    ],
  },
];

export type ServiceAreaInfo = {
  slug: string;
  name: string;
  heading: string;
  summary: string;
  description: string;
  properties: string[];
};

export const serviceAreas: ServiceAreaInfo[] = [
  {
    slug: "naples",
    name: "Naples",
    heading: "Security Services in Naples, Florida",
    summary: "Professional security services for commercial, residential, and private property environments in Naples.",
    description:
      "Blackhorn Security provides armed, unarmed, and mobile patrol security services for properties and businesses throughout Naples, Florida. Whether you manage a commercial property, an HOA-governed community, or a private residence, our officers provide a professional, visible presence tailored to the property's needs.",
    properties: [
      "Commercial properties and office parks",
      "Residential communities and HOAs",
      "Retail locations and shopping centers",
      "Private properties and estates",
      "Construction sites",
      "Events held throughout Naples",
    ],
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    heading: "Security Services in Fort Myers, Florida",
    summary: "Security coverage and patrol services designed for properties and businesses throughout Fort Myers.",
    description:
      "Blackhorn Security supports businesses, property managers, and communities throughout Fort Myers, Florida with armed, unarmed, and mobile patrol security services. Our officers help provide a dependable, visible security presence across commercial, residential, and construction properties.",
    properties: [
      "Commercial properties and businesses",
      "Residential communities and HOAs",
      "Retail and customer-facing locations",
      "Construction and job sites",
      "Parking areas and shared property spaces",
      "Events held throughout Fort Myers",
    ],
  },
];
