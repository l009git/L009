import { metadataObject } from "./metatags"; 
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Protection from '@/components/Protection/Protection';

import "./globals.css";

export const metadata: Metadata = metadataObject;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        <Protection>
          {children}
        </Protection>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}