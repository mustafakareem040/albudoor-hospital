import {getHeader} from "@/components/data/get-header";

export async function getAll(locale: string) {
    return await Promise.all(
         [getHeader(locale)]
    )
}