interface SocialMedia {
    id: number;
    title: string;
    link: string;
}

interface Logo {
    id: number;
    url: string;
    alternativeText: string | null;
    width: number;
    height: number;
}

interface FooterData {
    id: number;
    title: string;
    description: string;
    locations: string;
    contacts: string;
    logo: Logo;
    socialMedia: SocialMedia[];
}

export default interface FooterResponse {
    data: FooterData;
    meta: Record<string, unknown>;
}
