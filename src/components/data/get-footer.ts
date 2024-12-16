import FooterResponse from "@/components/types/footer";

export default async function getFooterData(locale: string): Promise<FooterResponse> {
    const res = await fetch(`https://admin.albudoor-hospital.iq/api/footer?populate=*&locale=${locale}`);
    if (!res.ok) throw new Error('Failed to fetch footer data');
    return await res.json();
}
