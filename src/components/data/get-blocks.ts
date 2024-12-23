import {BlocksResponse} from "@/components/types/blocks";

export async function getBlocks(locale: string): Promise<BlocksResponse> {
    const res = await fetch(
        `https://admin.albudoor-hospital.iq/api/block?populate[service][populate]=*&locale=${locale}`
        , {
            next: {
                tags: ['blocks']
            }
        })
    return res.json();
}