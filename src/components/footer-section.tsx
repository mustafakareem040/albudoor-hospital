import { FC } from 'react';
import Link from 'next/link';
import FooterResponse from "@/components/types/footer";
import CustomImage from "@/components/utils/image";

const Footer: FC<{ data: FooterResponse }> = ({ data }) => {
    const locationLines = data.data.locations.split('\n');
    const contactLines = data.data.contacts.split('\n');
    const isArabic = data.data.locale === 'ar';

    const isEmail = (text: string) => text.includes('@');
    const isPhone = (text: string) => text.includes('+');

    const translations = {
        mission: isArabic ? 'مهمتنا' : 'Our Mission',
        location: isArabic ? 'الموقع' : 'Location',
        contactUs: isArabic ? 'اتصل بنا' : 'Contact Us',
        rights: isArabic ? 'شركة الارض الرقمية, جميع الحقوق محفوظة' : 'Digital Land, All Rights Reserved'
    };

    return (
        <footer className="bg-white px-4 py-8 md:px-12 lg:px-16 border-t" dir={isArabic ? 'rtl' : 'ltr'}>
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-12">
                    <div className="lg:col-span-3">
                        <div className="flex items-center h-20 gap-4">
                            <Link
                                href="/"
                                className="shrink-0 group"
                                aria-label={data.data.title}
                            >
                                <div className="relative w-16 aspect-[50/61] transition-all duration-300 group-hover:scale-105">
                                    <CustomImage
                                        src={data.data.logo.url}
                                        alt={data.data.logo.alternativeText || data.data.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 64px, 64px"
                                        priority
                                    />
                                </div>
                            </Link>
                            <h2 className="text-lg font-medium font-quicksand text-gray-700">
                                {data.data.title}
                            </h2>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{translations.mission}</h3>
                        <p className="font-lexend text-base leading-relaxed text-gray-600">
                            {data.data.description}
                        </p>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{translations.location}</h3>
                            <div className="space-y-2 text-gray-600">
                                {locationLines.map((line, index) => (
                                    <p key={index} className="text-base leading-relaxed">{line}</p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{translations.contactUs}</h3>
                            <div className="space-y-2">
                                {contactLines.map((line, index) => (
                                    <p key={index} className="text-base">
                                        {isEmail(line) ? (
                                            <a href={`mailto:${line.trim()}`}
                                               className="text-gray-600 hover:text-blood transition-colors duration-300">
                                                {line}
                                            </a>
                                        ) : isPhone(line) ? (
                                            <a href={`tel:${line.replace(/\s/g, '')}`}
                                               className="text-gray-600 hover:text-blood transition-colors duration-300">
                                                {line}
                                            </a>
                                        ) : (
                                            <span className="text-gray-600">{line}</span>
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} {translations.rights}.
                        </p>

                        <div className="flex items-center gap-6">
                            {data.data.socialMedia.map((social) => (
                                <Link
                                    key={social.id}
                                    href={social.link.startsWith('http') ? social.link : `https://${social.link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group transition-transform duration-300 hover:scale-110"
                                    aria-label={`Visit our ${social.title} page`}
                                >
                                    <div className="relative w-5 h-5">
                                        <CustomImage
                                            src={social.logo.url}
                                            alt={social.title}
                                            fill
                                            className="object-contain transition-opacity group-hover:opacity-80"
                                            sizes="20px"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;