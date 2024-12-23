import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import HeaderData from "@/components/types/header";
import CustomImage from "@/components/utils/image";
import { ChevronDown, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MobileMenu } from "@/components/mobile-menu";

const Header = ({ items }: { items: HeaderData }) => {
    const isArabic = items.data.locale === 'ar';
    const languageText = isArabic ? 'اللغة' : 'Language';

    return (
        <header className={cn(
            "flex py-4 items-center w-full justify-between px-4 lg:justify-around",
            isArabic && "flex-row-reverse"
        )}>
            <Link href="/" aria-label="Home">
                <CustomImage
                    src={items.data.logo.url}
                    alt="logo"
                    width={70}
                    height={86}
                    className="object-contain"
                    loading="eager"
                />
            </Link>

            <nav className={cn(
                "hidden lg:flex items-center",
                isArabic ? "space-x-reverse space-x-8" : "space-x-8"
            )} dir={isArabic ? 'rtl' : 'ltr'} role="navigation">
                {items.data.navbar.map((item) => (
                    item.children?.length ? (
                        <div key={item.id} className="group relative">
                            <button
                                className={cn(
                                    "text-lg inline-flex items-center transition-colors duration-200 hover:text-[#D32928]",
                                    "focus-visible:ring-2 focus-visible:ring-offset-2 rounded",
                                    item.props?.color ? `text-[${item.props.color}]` : 'text-[#3F3F3F]',
                                    item.props?.fontWeight ? `font-[${item.props.fontWeight}]` : 'font-medium'
                                )}
                            >
                                {item.title}
                                <ChevronDown className={cn(
                                    "h-4 w-4 transition-transform duration-200 group-hover:rotate-180",
                                    isArabic ? "mr-1" : "ml-1"
                                )} />
                            </button>
                            <div className={cn(
                                "absolute z-50 invisible opacity-0 translate-y-2 group-hover:visible",
                                "group-hover:opacity-100 group-hover:translate-y-0 mt-1 w-48",
                                "origin-top-right transition-all duration-300 ease-out",
                                isArabic && "right-0"
                            )}>
                                <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.id}
                                            href={child.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D32928] transition-colors duration-300"
                                        >
                                            {child.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                                "text-lg transition-colors duration-200 hover:text-[#D32928]",
                                "focus-visible:ring-2 focus-visible:ring-offset-2 rounded",
                                item.props?.color ? 'text-[#D32928]' : 'text-[#3F3F3F]',
                                item.props?.fontWeight ? `font-[${item.props.fontWeight}]` : 'font-medium'
                            )}
                        >
                            {item.title}
                        </Link>
                    )
                ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-2">
                <Globe width={24} height={24}/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="font-medium text-lg">
                            {languageText}
                            <ChevronDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href="/en" className="w-full flex justify-between items-center" prefetch={true}>
                                English
                                {!isArabic && <Check className="h-4 w-4" />}
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/ar" className="w-full flex justify-between items-center" prefetch={true}>
                                العربية
                                {isArabic && <Check className="h-4 w-4" />}
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <MobileMenu items={items} />
        </header>
    );
};

export default Header;