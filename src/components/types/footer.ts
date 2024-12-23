interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    related: RelatedItem[];
}

interface RelatedItem {
    __type: string;
    id: number;
    documentId: string;
    title?: string;
    description?: string;
    locations?: string;
    contacts?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}

interface SocialMedia {
    id: number;
    title: string;
    link: string;
    logo: Image;
}

interface FooterData {
    id: number;
    documentId: string;
    title: string;
    description: string;
    locations: string;
    contacts: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    socialMedia: SocialMedia[];
    logo: Image;
}

export default interface FooterResponse {
    data: FooterData;
    meta: Record<string, unknown>;
}