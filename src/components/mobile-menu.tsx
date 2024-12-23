'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import HeaderData from "@/components/types/header";

export const MobileMenu = ({ items }: { items: HeaderData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="md:hidden">
                    <Menu width={32} height={32}/>
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0 overflow-y-auto"> {/* Apply overflow here */}
                <SheetHeader className="p-4 border-b">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4"> {/* Remove h-[100vh] here */}
                    <Accordion type="single" collapsible>
                        {items.data.navbar.map((item) => (
                            item.children?.length ? (
                                <AccordionItem value={item.id.toString()} key={item.id}>
                                    <AccordionTrigger className="px-4 py-2 text-lg hover:text-[#D32928]">
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-4">
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
                            <div className="flex items-center gap-2">
                                <Globe className="h-5 w-5"/>
                                <Link href="/en" className="py-2 px-4 hover:text-[#D32928]">English</Link>
                                <Link href="/ar" className="py-2 px-4 hover:text-[#D32928]">العربية</Link>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </SheetContent>
        </Sheet>
    );
};