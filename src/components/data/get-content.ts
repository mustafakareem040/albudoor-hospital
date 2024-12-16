import ContentResponse from "@/components/types/content";

export async function getContent(locale: string): Promise<ContentResponse> {
    const res = await fetch(
        `https://admin.albudoor-hospital.iq/api/content?populate=*&locale=${locale}`
        , {
            next: {
                revalidate: 60
            }
        })
    return res.json();
}