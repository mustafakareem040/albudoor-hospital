import CustomImage from "@/components/utils/image";
import HeroData from "@/components/types/hero";

export default function Hero({ item }: { item: HeroData }) {
    return (
        <div className="relative aspect-square sm:h-[28rem] lg:h-[32rem] w-full">
        <CustomImage priority={true} alt={"Hero Image"} className="object-cover" src={item.data.image.url} fill={true}/>
        </div>
    )
}