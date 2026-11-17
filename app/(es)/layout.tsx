import type { ReactNode } from "react";
import { SiteDocument } from "@/components/site-document";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("es");
export default function Layout({ children }: { children: ReactNode }) {
  return <SiteDocument language="es">{children}</SiteDocument>;
}
