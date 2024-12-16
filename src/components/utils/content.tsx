import parse, { HTMLReactParserOptions, Element } from 'html-react-parser';
import CustomImage from "@/components/utils/image";
import ContentResponse from "@/components/types/content";


export default async function Content({data}: {data: ContentResponse}) {
    return (
        <>
            {data.data.content.map((item) => (
                <article
                    key={item.id}
                    className="prose prose-lg max-w-none"
                >
                    {parseContent(item.editor)}
                </article>
            ))}
        </>
    );
}

export function parseContent(html: string) {
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element && domNode.name === 'img') {
                const {
                    src,
                    alt,
                    sizes,
                    ...props
                } = domNode.attribs;


                return (
                    <div className="relative min-h-[300px] w-full aspect-[5/3]">
                        <CustomImage
                            src={src}
                            alt={alt || ''}
                            fill={true}
                            sizes={sizes}
                            className={"object-cover"}
                            style={props.style ? JSON.parse(props.style) : undefined}
                        />
                    </div>
                );
            }
        }
    };

    return parse(html, options);
}