import type { Metadata } from "next";
import "./globals.css";
import { Noise } from "@/components/effects/noise";
import { PageAmbient } from "@/components/effects/page-ambient";

export const metadata: Metadata = {
  title: "DAZZLE — Paint Protection, Perfected.",
  description: "Premium PPF, ceramic coating and detailing concept for Dazzle Detailing Studio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PageAmbient/>{children}<Noise/></body></html>;
}