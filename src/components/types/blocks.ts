// types/blocks.ts
interface IconType {
    id: number;
    documentId: string;
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null ;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface ServiceType {
    id: number;
    title: string;
    icon: IconType;
    additional: null | string;
}

export interface BlocksResponse {
    data: {
        id: number;
        documentId: string;
        editor: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        service: ServiceType[];
    }
}