"use client"

import { useState, useEffect } from "react"
import { ReactNode } from "react";
import clsx from "clsx";

const colors = [
    "bg-celeste",
    "bg-tomato",
    "bg-periwinkle",
    "bg-faded-blue",
    "bg-slate-blue"
];

export default function DynamicGridBox({ children, className }: { children: ReactNode, className?: string }) {
    const [bgColor, setBgColor] = useState("bg-background")

    useEffect(() => {
        setBgColor(colors[Math.floor(Math.random() * colors.length)])
    }, []);

    return (
        <div className={clsx(
            `${bgColor} ${className}`,
            {
                "text-background": bgColor === "bg-celeste"
            }
        )}>
            {children}
        </div>
    )
}
