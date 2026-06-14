import type { MetadataRoute } from "next";

import { company } from "@/data/company";

const routes = ["", "/nosotros", "/servicios", "/noticias", "/aliados", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
