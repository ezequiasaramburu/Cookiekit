import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "CookieKit – GDPR tools for devs",
  description: "Generate a cookie badge, privacy policy, and terms of service in minutes",
  openGraph: {
    title: "CookieKit – GDPR tools for devs",
    description: "Generate a cookie badge, privacy policy, and terms of service in minutes",
    images: [
      {
        url: "/assets/cookiekit-logo.png",
        width: 1200,
        height: 630,
        alt: "CookieKit - GDPR tools for developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CookieKit – GDPR tools for devs",
    description: "Generate a cookie badge, privacy policy, and terms of service in minutes",
    images: ["/assets/cookiekit-logo.png"],
  },
}; 