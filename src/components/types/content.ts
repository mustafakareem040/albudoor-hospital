interface Content {
    order: number;
    id: number;
    editor: string;
}

export default interface ContentResponse {
    data: {
        id: number;
        documentId: string;
        content: Content[];
        locale: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
    meta: Record<string, unknown>;
}