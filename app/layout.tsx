import { metadataObject } from "./metatags"; 
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Protection from '@/components/Protection/Protection';

import "./globals.css";

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
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}