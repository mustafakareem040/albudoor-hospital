interface Icon {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata:  null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface Service {
    id: number;
    title: string;
    icon: Icon;
    additional: string | null;
}

interface Data {
    id: number;
    documentId: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    services: Service[];
}

export default interface ServiceResponse {
    data: Data;
    meta: Record<string, never>;
}