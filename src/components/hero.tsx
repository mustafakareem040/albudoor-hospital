import CustomImage from "@/components/utils/image";
import HeroData from "@/components/types/hero";

export default function Hero({ item }: { item: HeroData }) {
    return (
        <div className="relative min-h-[300px] aspect-[3/1] w-full">
        <CustomImage priority={true} alt={"Hero Image"} className="object-cover" src={item.data.image.url} fill={true}/>
        </div>
    )
}