'use client'

import { useState, useEffect } from "react";
import { space_grotesk } from "./fonts";
import Link from "next/link";
import { Menu, XIcon } from 'lucide-react';

export function MobileNavBar({ displayType }: { displayType: string }) {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("mobile-scroll-lock");
        }
        else {
            document.body.classList.remove("mobile-scroll-lock");
        }
    }, [isVisible]);

    return (
        <div className={`${displayType} relative`}>
            <button onClick={() => { setVisible(!isVisible); console.log(isVisible); } } className="fixed z-10 rounded-full border-1 border-lowgray text-center p-3 m-4 bg-background/60 backdrop-blur">
                { isVisible ? <XIcon /> : <Menu /> }
            </button>
            <nav className={`${space_grotesk.className} antialiased fixed pt-[5.2rem] flex flex-col h-[100dvh] w-[100vw] bg-background/80 backdrop-blur p-4 text-4xl gap-3 transition-transform duration-200 ease-out z-9 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
                <Link href="/">Home </Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}
