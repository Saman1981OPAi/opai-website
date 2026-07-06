import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const secondary = ["/opai-police", "/download", "/privacy-policy", "/terms-of-service"];
  const paths = Array.from(new Set([...navItems.map((item) => item.href), ...secondary]));

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
