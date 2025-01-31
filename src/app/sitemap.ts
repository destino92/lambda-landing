import { type MetadataRoute } from "next";

import { siteConfig } from "../config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
    },
    // {
    //   url: `${siteConfig.url}/academy`,
    //   lastModified: new Date(),
    // },
    // {
    //   url: `${siteConfig.url}/voulez-travailler-pour-tiktok-ou-tesla`,
    //   lastModified: new Date(),
    // },
  ];
}