import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import HeaderData from "@/components/types/header";
import CustomImage from "@/components/utils/image";
import {ChevronDown, Globe} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";

const Header = ({ items }: { items: HeaderData }) => {
    return (
        <header className="flex py-4 items-center w-full justify-around">
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

            <nav className="py-10 flex items-center space-x-6" role="navigation">
                {items.data.navbar.map((item) => (
                    item.children?.length ? (
                        <div key={item.id} className="group relative">
                            <button
                                className={cn(
                                    "text-lg px-4 py-2 rounded-md inline-flex items-center",
                                    "focus-visible:ring-2 focus-visible:ring-offset-2",
                                    "hover:text-[#D32928] transition-colors duration-200",
                                    item.props?.color ? `text-${item.props.color}` : 'text-[#3F3F3F]',
                                    item.props?.fontWeight ? `font-[${item.props.fontWeight}]` : 'font-medium'
                                )}
                            >
                                {item.title}
                                <svg className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                            <div
                                className="absolute z-50 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 mt-1 w-48 origin-top-right transition-all duration-300 ease-out">
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
            <div className="hidden md:flex items-center space-x-2">
                <Globe className="w-6 h-6"/>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="font-medium text-lg">
                            Language
                            <ChevronDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href="/en" className="w-full" prefetch={true}>English</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/ar" className="w-full" prefetch={true}>العربية</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Header;