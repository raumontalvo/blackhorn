import type { MetadataRoute } from "next";
import { services, serviceAreas, siteUrl } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/service-areas"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const serviceAreaRoutes = serviceAreas.map((area) => ({
    url: `${siteUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...serviceAreaRoutes];
}
