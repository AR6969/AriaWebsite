import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practices } from "@/lib/practices";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/personal-injury",
    ...practices.map((p) => `/${p.slug}`),
    "/immigration",
    "/attorneys/aria-noosha",
    "/our-team",
    "/reviews",
    "/locations/san-francisco",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: new URL(path, site.url).href,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/privacy" ? 0.2 : 0.8,
  }));
}
