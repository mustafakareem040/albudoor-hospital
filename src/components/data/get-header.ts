import Header from "@/components/types/header";

export async function getHeader(locale: string): Promise<Header> {
    const res = await fetch(
        `https://admin.albudoor-hospital.iq/api/header?populate[logo][populate]=*&populate[navbar][populate]=*&locale=${locale}`
    , {
            next: {
                revalidate: 60
            }
        })
    return res.json();
}