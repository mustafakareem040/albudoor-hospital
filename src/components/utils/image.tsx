import Image, { ImageProps } from 'next/image';

const PREFIX = 'https://admin.albudoor-hospital.iq';

type CustomImageProps = Omit<ImageProps, 'src'> & {
    src: string;
};

export default function CustomImage({ src, alt, ...props }: CustomImageProps) {
    const fullSrc = src.startsWith('http') ? src : src.endsWith("/") ? `${PREFIX}${src}` : `${PREFIX}/${src}`;
    return <Image src={fullSrc} alt={alt} {...props} />;
}