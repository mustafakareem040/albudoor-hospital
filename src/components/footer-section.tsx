import { FC } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import FooterResponse from "@/components/types/footer";
import CustomImage from "@/components/utils/image";

const Footer: FC<{ data: FooterResponse }> = ({ data }) => {
    const socialIcons = {
        Facebook: Facebook,
        Instagram: Instagram,
        Youtube: Youtube,
        LinkedIn: Linkedin,
    };

    return (
        <footer className="bg-gray-50 px-4 py-8 md:px-12 lg:px-16">
            <div className="mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo Section */}
                    <div className="flex gap-8">
                        <Link href="/" className="mb-4">
                            <div className="relative w-16 aspect-[50/61]">
                                <CustomImage
                                    src={data.data.logo.url}
                                    alt={data.data.logo.alternativeText || data.data.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </Link>
                        <p className="mb-4 translate-y-1/3 md:translate-y-1/4 w-fit font-light">
                            {data.data.title}
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="lg:col-span-2">
                        <p className="font-lexend text-base leading-relaxed text-[#2E313A] whitespace-pre-line">
                            {data.data.description}
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                            <h3 className="mb-4 font-bold text-black">Location</h3>
                            <p className="text-base">{data.data.locations}</p>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-black">Contacts</h3>
                            <p className="text-base">{data.data.contacts}</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
                    <p className="mb-4 text-sm text-gray-600 md:mb-0">
                        © {new Date().getFullYear()} All Rights Reserved, Digital Land Company
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        {data.data.socialMedia.map((social) => {
                            const Icon = socialIcons[social.title as keyof typeof socialIcons];
                            return Icon ? (
                                <Link
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black transition-colors hover:text-gray-600"
                                    aria-label={`Visit our ${social.title} page`}
                                >
                                    <Icon size={24} />
                                </Link>
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;