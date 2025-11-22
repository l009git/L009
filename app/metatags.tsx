import type { Metadata } from "next";

export const metadataObject: Metadata = { 
    title: "L009", 
    description: "Complete solutions in Process Automation, Intelligent Chatbots, App Development, and Strategic Consulting. Maximize your efficiency and ROI.",
    keywords: [
        "intelligent chatbots", 
        "process automation", 
        "paid traffic", 
        "app development", 
        "technology consulting", 
        "development support", 
        "L009"
    ],
    
    authors: [{ name: "Daniel Mazzeu" }],
    
    robots: {
        index: true,
        follow: true,
        googleBot: { 
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    icons: { 
        icon: "/images/favicon.ico",
        shortcut: "/images/favicon.ico",
    },
    
    openGraph: {
        title: "L009",
        description: "Complete solutions in Process Automation, Intelligent Chatbots, App Development, and Strategic Consulting. Maximize your efficiency and ROI.",
        url: "https://L009.com",
        siteName: "L009",
        images: [{
            url: "https://L009.com/images/thumbnail.png", 
            width: 1200, 
            height: 630,
            alt: 'L009 - Automation and Technology Solutions'
        }],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image", 
        title: "L009",
        description: "Maximize your productivity with Automation, AI, and Digital Strategy. B2B technology solutions for high ROI.",
        images: ['https://L009.com/images/thumbnail.png'],
    },
};