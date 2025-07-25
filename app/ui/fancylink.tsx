"use client"

import { colors } from "./highlight";
import { useState } from "react";

export default function FancyLink({ href, children }: { href: string, children: React.ReactNode }) {
    const [textColor, setTextColor] = useState("text-foreground");

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <a
          href={href}
          onMouseEnter={ () => setTextColor(randomColor()) }
          onMouseLeave={ () => setTextColor("text-foreground") }
          className={`inline ${textColor} duration-50 ease-out underline underline-offset-2 hover:scale-105 hover:font-bold inline-block`}
        >
            {children}
        </a>
    );
}
