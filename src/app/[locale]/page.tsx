import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getHeader } from "@/components/data/get-header";
import Header from "@/components/header";
import { getHero } from "@/components/data/get-hero";
import Hero from "@/components/hero";
import { getContent } from "@/components/data/get-content";
import ContentSection from "@/components/content-section";
import { getBlocks } from "@/components/data/get-blocks";
import BlockSection from "@/components/blocks-section";
import MedicalServices from "@/components/services-section";
import { getServices } from "@/components/data/get-services";
import LocationSection from "@/components/location-section";
import getFooterData from "@/components/data/get-footer";
import FooterSection from "@/components/footer-section";

const LoadingSpinner = () => <div className="animate-spin h-8 w-8 border-4 border-primary rounded-full border-t-transparent" />;

async function getLocation(locale: string) {
    return {
        title: locale === 'en' ? 'Our Location' : 'موقعنا',
        description: locale === 'en'
            ? "Your Health Doesn't Follow a Schedule. Neither Do We. We're Here Every Day, Every Hour"
            : 'صحتك لا تتبع جدولًا زمنيًا. ونحن كذلك. نحن هنا كل يوم، كل ساعة'
    };
}

async function fetchWithFallback<T>(
    fetcher: (locale: string) => Promise<T>,
    locale: string
): Promise<T | null> {
    try {
        const data = await fetcher(locale);
        // @ts-expect-error test
        if (data == null || (typeof data === 'object' && Object.keys(data).length === 0) || data.data! === null || data?.status?.toString() === '404') {
            if (locale !== 'en') {
                return await fetcher('en');
            }
            return null;
        }
        return data;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        if (locale !== 'en') {
            return await fetchWithFallback(fetcher, 'en');
        }
        return null;
    }
}

// Wrapper components with error handling
function HeaderWrapper({ data }: { data: Awaited<ReturnType<typeof getHeader>> | null }) {
    if (!data) return null;
    return <Header items={data} />;
}

function HeroWrapper({ data }: { data: Awaited<ReturnType<typeof getHero>> | null }) {
    if (!data) return null;
    return <Hero item={data} />;
}

function ContentWrapper({ data }: { data: Awaited<ReturnType<typeof getContent>> | null }) {
    if (!data) return null;
    return <ContentSection data={data} />;
}

function BlocksWrapper({ data }: { data: Awaited<ReturnType<typeof getBlocks>> | null }) {
    if (!data) return null;
    return <BlockSection data={data} />;
}

function ServicesWrapper({ data }: { data: Awaited<ReturnType<typeof getServices>> | null }) {
    if (!data) return null;
    return <MedicalServices data={data} />;
}

function LocationWrapper({ data }: { data: { title: string; description: string; } | null }) {
    if (!data) return null;
    return <LocationSection title={data.title} description={data.description} />;
}

function FooterWrapper({ data }: { data: Awaited<ReturnType<typeof getFooterData>> | null }) {
    if (!data) return null;
    return <FooterSection data={data} />;
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const [
        headerData,
        heroData,
        contentData,
        blocksData,
        servicesData,
        locationData,
        footerData
    ] = await Promise.all([
        fetchWithFallback(getHeader, locale),
        fetchWithFallback(getHero, locale),
        fetchWithFallback(getContent, locale),
        fetchWithFallback(getBlocks, locale),
        fetchWithFallback(getServices, locale),
        fetchWithFallback(getLocation, locale),
        fetchWithFallback(getFooterData, locale)
    ]);

    if (!headerData && !heroData && !contentData) {
        notFound();
    }

    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <HeaderWrapper data={headerData} />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <HeroWrapper data={heroData} />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <ContentWrapper data={contentData} />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <BlocksWrapper data={blocksData} />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <ServicesWrapper data={servicesData} />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <LocationWrapper data={locationData} />
            </Suspense>

            <Suspense fallback={<LoadingSpinner />}>
                <FooterWrapper data={footerData} />
            </Suspense>
        </>
    );
}