import ServiceResponse from "@/components/types/service";

export async function getServices(locale: string): Promise<ServiceResponse> {
    const res = await fetch(
        `https://admin.albudoor-hospital.iq/api/service?populate[services][populate]=*&locale=${locale}`
        , {
            next: {
                revalidate: 60
            }
        })
    return res.json();
}