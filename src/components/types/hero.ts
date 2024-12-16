export default interface HeroData {
    data: {
        id: number;
        documentId: string;
        createdAt: string; // ISO date string
        updatedAt: string; // ISO date string
        publishedAt: string; // ISO date string
        locale: string;
        image: {
            id: number;
            documentId: string;
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
                thumbnail: ImageFormat;
                large: ImageFormat;
                medium: ImageFormat;
                small: ImageFormat;
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: unknown | null;
            createdAt: string; // ISO date string
            updatedAt: string; // ISO date string
            publishedAt: string; // ISO date string
        };
        localizations: unknown[]; // Array of localized data, currently empty
    };
    meta: unknown; // Additional metadata, structure unknown
}

interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number; // File size in KB
    sizeInBytes: number; // File size in bytes
    url: string; // Relative URL to the image
}