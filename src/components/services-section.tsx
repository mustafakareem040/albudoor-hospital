import {Card} from "@/components/ui/card";
import CustomImage from "@/components/utils/image";
import ServiceResponse from "@/components/types/service";

export default async function MedicalServices({data}: {data: ServiceResponse}) {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center font-poppins mb-12">
                <h2 className="text-[48px] font-medium text-[#3F3F3F] mb-4">
                    {data.data.title}
                </h2>
                <p className="text-lg text-[#B3B3B3] max-w-md mx-auto">
                    {data.data.description}
                </p>
            </div>

            <div className="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {data.data.services.map((service) => (
                    <Card
                        key={service.id}
                        className="p-8 transition-transform hover:scale-105 h-full"
                    >
                        <div className="flex flex-col items-center gap-6 h-full">
                            {service.icon && <div className="size-12 relative">
                                <CustomImage
                                    src={service.icon.url}
                                    alt="service icon"
                                    fill
                                    className="object-contain"
                                    aria-hidden="true"
                                />
                            </div>}
                            <h3 className="text-lg font-quicksand text-[#2E313A] text-center">
                                {service.title}
                            </h3>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}