// components/block-section.tsx
import {BlocksResponse} from "@/components/types/blocks";
import CustomImage from "@/components/utils/image";
import {parseContent} from "@/components/utils/content";

export default function BlockSection({ data }: { data: BlocksResponse }) {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="prose mb-16 prose-lg max-w-none">
                {parseContent(data.data.text)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.data.service.map((item) => (
                    <div
                        key={item.id}
                        className={`relative p-6 rounded-[28.743px] backdrop-blur-[14.3715px] shadow-[0px_2.8743px_17.2458px_-0.718575px_rgba(0,0,0,0.2)] h-[251.9px] transition-all duration-300 hover:transform hover:-translate-y-2
              ${item.id === 6 ? 'bg-[#D32928] text-white' : 'bg-white'}`}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-4">
                            <div className="relative w-20 h-20">
                                <CustomImage
                                    src={item.icon.url}
                                    alt={item.title}
                                    fill={true}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-poppins font-normal text-center">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}