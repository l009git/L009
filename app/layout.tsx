import { metadataObject } from "./metatags"; 
import type { Metadata } from "next";
import "./globals.css";
import Protection from '@/components//Protection/Protection';

export const metadata: Metadata = metadataObject;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Protection>
          {children}
        </Protection>
      </body>
    </html>
  );
}