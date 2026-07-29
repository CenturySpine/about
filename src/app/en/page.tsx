import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Developer, passionate about hiking and mountains — about me and my projects.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "About",
    url: "https://centuryspine.org/en",
    locale: "en_US",
    type: "profile",
    firstName: "Bruno",
    lastName: "Chappe",
  },
};

export default function Page() {
  return <AboutView locale="en" />;
}
