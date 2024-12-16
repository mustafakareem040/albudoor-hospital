type LocationProps = {
    title: string;
    description: string;
}

export default function LocationSection({ title, description }: LocationProps) {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-[#3F3F3F] font-medium text-3xl md:text-[48px] leading-tight font-poppins mb-6">
                    {title}
                </h1>
                <p className="text-[#B3B3B3] mx-12 sm:mx-24 md:mx-36 font-medium italic text-base md:text-lg font-poppins mb-12">
                    {description}
                </p>
                <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.408220936328!2d44.424081775801746!3d33.30814167344622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557814b297d64e7%3A0xccc1f319efe709a!2sAl%20Budoor%20Hospital!5e0!3m2!1sen!2siq!4v1734361392602!5m2!1sen!2siq"
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                        lang={"ar"}
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}
