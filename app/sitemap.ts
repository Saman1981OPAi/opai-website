import type { MetadataRoute } from "next";
import { canonicalUrl, seoPages } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return seoPages.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));
}
