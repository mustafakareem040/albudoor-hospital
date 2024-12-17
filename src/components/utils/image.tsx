import Image, { ImageProps } from 'next/image';

const PREFIX = 'https://admin.albudoor-hospital.iq';

type CustomImageProps = Omit<ImageProps, 'src'> & {
    src: string;
};

export default function CustomImage({ src, alt, ...props }: CustomImageProps) {
    const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
    const fullSrc = normalizedSrc.startsWith('http') ? normalizedSrc : `${PREFIX}/${normalizedSrc}`;
    return <Image src={fullSrc} alt={alt} {...props} />;
}