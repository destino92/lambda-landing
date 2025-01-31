import "./tiktok.css"
import { Montserrat } from "next/font/google"
import Script from "next/script"
import type React from "react" // Import React

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Voulez vous travailler pour Tiktok ou Tesla ?",
  description: "",
  openGraph: {
    title: "Voulez vous travailler pour Tiktok ou Tesla ?",
    description: "",
    url: "https://bmh-advertising-49147926.hubspotpagebuilder.com/voulez-vous-travailler-pour-tiktok-ou-tesla",
  },
  twitter: {
    title: "Voulez vous travailler pour Tiktok ou Tesla ?",
    description: "",
    card: "summary",
  },
  other: {
    "content-language": "en-us",
    generator: "HubSpot",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <head>
        <link
          rel="stylesheet"
          href="http://7052064.fs1.hubspotusercontent-na1.net/hubfs/7052064/hub_generated/template_assets/DEFAULT_ASSET/1738266429681/template_main.min.css"
        />
        <link
          rel="canonical"
          href="../../../com/hubspotpagebuilder/bmh-advertising-49147926/voulez-vous-travailler-pour-tiktok-ou-tesla.html"
        />
      </head>
      <body className={`${montserrat.className}`}>
        {children}
        <Script id="hs-script-loader" src="/hs/hsstatic/HubspotToolsMenu/static-1.393/js/index.js" />
        <Script id="hs-analytics" strategy="afterInteractive">
          {`
            var hsVars = {
              render_id: "343f8c0d-320d-48f7-8331-4009dd9fb6d2",
              ticks: 1738320794601,
              page_id: 185539796766,
              content_group_id: 0,
              portal_id: 49147926,
              app_hs_base_url: "https://app.hubspot.com",
              cp_hs_base_url: "https://cp.hubspot.com",
              language: "en-us",
              analytics_page_type: "landing-page",
              analytics_page_id: "185539796766",
              category_id: 1,
              folder_id: 0,
              is_hubspot_user: null
            }
          `}
        </Script>
      </body>
    </html>
  )
}

