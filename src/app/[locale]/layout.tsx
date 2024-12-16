import type { Metadata } from "next";
import { Poppins, IBM_Plex_Sans, Quicksand } from "next/font/google";
import "../globals.css";
import React from "react";
import Head from "next/head";

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    variable: "--font-poppins",
    subsets: ["latin"],
    display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
    weight: ['400', '500', '600', '700'],
    variable: "--font-ibm-plex-sans",
    subsets: ["latin"],
    display: "swap",
});

const quickSand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    display: "swap",
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const { locale } = await params;
    const isArabic = locale === 'ar';

    const siteName = isArabic ? "مستشفى البدور للجراحات التخصصية" : "Albudoor Specialist Surgery Hospital";
    const title = isArabic
        ? "مستشفى البدور للجراحات التخصصية | أفضل رعاية طبية في بغداد"
        : "Albudoor Specialist Surgery Hospital | Premier Medical Care in Baghdad";
    const description = isArabic
        ? "مستشفى البدور للجراحات التخصصية في بغداد، تقدم خدمات طبية متميزة في جراحة القلب، التجميل، العظام، والمسالك البولية. أحدث التقنيات وأطباء متخصصون لضمان أفضل رعاية صحية."
        : "Albudoor Hospital in Baghdad offers specialized surgical services including open-heart, cosmetic, orthopedic, and urology. State-of-the-art facilities and expert doctors ensure the highest quality of healthcare.";

    return {
        title,
        description,
        alternates: {
            canonical: isArabic ? 'https://albudoor-hospital.iq.com/ar' : 'https://albudoor-hospital.iq.com',
            languages: {
                'en': 'https://albudoor-hospital.iq.com',
                'ar': 'https://albudoor-hospital.iq.com/ar',
            },
        },
        openGraph: {
            title,
            description,
            url: isArabic ? 'https://albudoor-hospital.iq/ar' : 'https://albudoor-hospital.iq',
            siteName,
            locale: isArabic ? 'ar_AR' : 'en_US',
            type: 'website',
        }
    };
}

export default async function RootLayout({
                                             children,
                                             params,
                                         }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const p = await params;
    const {locale} = await p;
    const lang = await locale || 'en';
    return (
        <html lang={lang}>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        </Head>
        <body
            className={`${poppins.variable} ${ibmPlexSans.variable} ${quickSand.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}