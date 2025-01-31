import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["7052064.fs1.hubspotusercontent-na1.net", "49147926.fs1.hubspotusercontent-na1.net"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://app.hubspot.com https://js.hsforms.net https://js.hs-scripts.com https://js.hscollectedforms.net https://js.usemessages.com;",
          },
        ],
      },
    ]
  },
};

export default nextConfig;
