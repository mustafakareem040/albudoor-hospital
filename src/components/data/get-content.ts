import ContentResponse from "@/components/types/content";

export async function getContent(locale: string): Promise<ContentResponse> {
    const res = await fetch(
        `https://admin.albudoor-hospital.iq/api/content?populate=*&locale=${locale}`
        , {
            next: {
                tags: ['content']
            }
        })
    return res.json();
}