'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Globe, Menu, Check } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import HeaderData from "@/components/types/header";

export const MobileMenu = ({ items }: { items: HeaderData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isArabic = items.data.locale === 'ar';

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className={cn("lg:hidden", isArabic && "order-first")}>
                    <Menu width={32} height={32}/>
                </button>
            </SheetTrigger>
            <SheetContent side={isArabic ? "right" : "left"} className="w-[300px] p-0 overflow-y-auto" dir={isArabic ? 'rtl' : 'ltr'}>
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>{isArabic ? 'القائمة' : 'Menu'}</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                    <Accordion type="single" collapsible>
                        {items.data.navbar.map((item) => (
                            item.children?.length ? (
                                <AccordionItem value={item.id.toString()} key={item.id}>
                                    <AccordionTrigger className="px-4 py-2 text-lg hover:text-[#D32928]">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className={isArabic ? "pr-4" : "pl-4"}>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.id}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#D32928]"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ) : (
                                <div key={item.id} className="px-4">
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-lg text-gray-700 hover:text-[#D32928]"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            )
                        ))}
                        <div className="px-4 pt-4 border-t mt-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5"/>
                                    <span className="text-lg">{isArabic ? 'اللغة' : 'Language'}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Link
                                        href="/en"
                                        className="py-2 px-4 hover:text-[#D32928] flex items-center justify-between"
                                    >
                                        English
                                        {!isArabic && <Check className="h-4 w-4" />}
                                    </Link>
                                    <Link
                                        href="/ar"
                                        className="py-2 px-4 hover:text-[#D32928] flex items-center justify-between"
                                    >
                                        العربية
                                        {isArabic && <Check className="h-4 w-4" />}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </SheetContent>
        </Sheet>
    );
};