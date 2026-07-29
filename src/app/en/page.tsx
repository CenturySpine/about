import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About",
  description: "Developer, passionate about hiking and mountains — about me and my projects.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "About",
    locale: "en_US",
  },
};

export default function Page() {
  return <AboutView locale="en" />;
}
