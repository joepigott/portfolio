'use client';

import { useState, useEffect } from "react";
import { space_grotesk } from "./fonts";
import Link from "next/link";
import { Menu, XIcon } from 'lucide-react';

export function MobileNavBar({ displayType }: { displayType: string }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    });

    return (
        <div className={`${displayType} fixed top-0`}>
            <button onClick={() => { setVisible(!isVisible); console.log(isVisible); } } className="z-50 rounded-full border-1 border-lowgray text-center p-3 m-4 bg-background/60 backdrop-blur">
                { isVisible ? <XIcon /> : <Menu /> }
            </button>
            <nav className={`${space_grotesk.className} antialiased flex flex-col h-[100dvh] w-[100vw] bg-background/80 backdrop-blur p-4 text-4xl gap-3 transition-transform duration-200 ease-out z-50 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link href="/">Home </Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}
