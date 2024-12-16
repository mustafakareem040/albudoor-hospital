interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
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
    } | null; // Made 'formats' optional based on the requirement that only logo is required
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
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
}
export interface NavItemChild {
    id: number;
    title: string;
    href: string;
}
export interface NavItem {
    id: number;
    title: string; // Required
    href: string; // Required
    props: {
        id: number;
        color: string;
        fontFamily: string;
        fontWeight: string;
    } | null;
    children: NavItemChild[];
}

interface HeaderProps {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    logo: Image; // Required
    navbar: NavItem[]; // Required
}
export default interface HeaderData {
    data: HeaderProps;
}