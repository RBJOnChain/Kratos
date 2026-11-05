import { MetadataRoute } from "next";
import { profileData } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profileData.meta.url}/sitemap.xml`,
  };
}

