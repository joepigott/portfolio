"use client"

import { useState, useEffect } from "react"

export const colors = [
    "text-celeste",
    "text-tomato",
    "text-periwinkle",
    "text-faded-blue",
    "text-slate-blue"
];

export default function HighlightText( { children }: { children: React.ReactNode }) {
    const [color, setColor] = useState("text-foreground");

    useEffect(() => {
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }, []);

    return (
        <span className={`${color} font-bold`}>
            {children}
        </span>
    );
}
