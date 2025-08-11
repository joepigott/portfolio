"use client"

import Link from "next/link";
import { colors } from "./highlight";
import { useState } from "react";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const [textColor, setTextColor] = useState("text-foreground");

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function isActive() {
        const currentPath = usePathname();
        if (href === '/') {
            return currentPath === href;
        } else {
            return currentPath.startsWith(href);
        }
    }

    return (
        <Link href={href}>
            <span
              onMouseEnter={ () => setTextColor(randomColor()) }
              onMouseLeave={ () => setTextColor("text-foreground") }
              className={clsx(
                `${textColor} inline-block duration-50 ease-out hover:scale-105 focus:scale-105`,
                {
                  "underline underline-offset-4": isActive()
                }
              )}
            >
                {children}
            </span>
        </Link>
    );
}
