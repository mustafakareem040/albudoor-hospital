import HeroData from "@/components/types/hero";

export async function getHero(locale: string): Promise<HeroData> {
    const res = await fetch(
        `https://admin.albudoor-hospital.iq/api/hero?populate=*&locale=${locale}`
        , {
            next: {
                tags: ['hero']
            }
        })
    return res.json();
}