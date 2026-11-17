import type { ReactNode } from "react";
import { SiteDocument } from "@/components/site-document";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("en");
export default function Layout({ children }: { children: ReactNode }) {
  return <SiteDocument language="en">{children}</SiteDocument>;
}
