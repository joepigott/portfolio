"use client"

import { useId } from "react";
import { montserrat } from "../ui/fonts";
import { useState } from "react"
import { ContactFormData } from "../api/contact/route";

const colors = [
    "border-tomato",
    "border-celeste",
    "border-periwinkle",
    "border-faded-blue",
    "border-slate-blue"
];

export default function ContactForm() {
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const data: ContactFormData = {
            name: form.get("name") as string,
            email: form.get("email") as string,
            message: form.get("message") as string
        };

        const result = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (result.ok) {
            setStatus("Message sent!");
        } else {
            setStatus("Something went wrong. Try again, or email me directly\
                at joe.pigs@protonmail.com (and let me know the form is broken!)");
        }
    };

    const nameID = useId();
    const emailID = useId();
    const messageID = useId();

    return (
        <div className={`${montserrat.className} flex flex-col items-center justify-center md:-mt-14 gap-4 w-full`}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full md:w-[50%] text-lg">
                <label id={nameID} className="sr-only">Full Name</label>
                <FancyInput id={emailID} type="text" name="name" className="w-full" placeholder="Name" required />
                <label id={emailID} className="sr-only">Email Adress</label>
                <FancyInput id={messageID} type="email" name="email" className="w-full" placeholder="Email" required />
                <label id={messageID} className="sr-only">Message</label>
                <BigFancyInput name="message" className="w-full" placeholder="Message" required />

                <FancyButton value="Submit" />
                {status && <span className="text-center">{status}</span>}
            </form>
        </div >
    );
}

export function FancyInput({ type, name, id, required, placeholder, className }: { type: string, name: string, id?: string, required?: boolean, placeholder?: string, className?: string }) {
    const [borderColor, setBorderColor] = useState("border-midgray");

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <input
            type={type}
            aria-describedby={id}
            name={name}
            required={required || false}
            placeholder={placeholder}
            onFocus={ () => setBorderColor(randomColor()) }
            onBlur={ () => setBorderColor("border-midgray") }
            className={`rounded-lg fg-foreground bg-background border-2 duration-50 ease-out ${borderColor} focus:scale-101 ${className}`}
        />
    );
}

export function BigFancyInput({ name, id, required, placeholder, className }: { name: string, id?: string, required?: boolean, placeholder?: string, className?: string }) {
    const [borderColor, setBorderColor] = useState("border-midgray");

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    return (
        <textarea
            aria-describedby={id}
            name={name}
            required={required || false}
            placeholder={placeholder}
            onFocus={ () => setBorderColor(randomColor()) }
            onBlur={ () => setBorderColor("border-midgray") }
            rows={7}
            className={`rounded-lg fg-foreground bg-background border-2 duration-50 ease-out ${borderColor} focus:scale-101 ${className}`}
        />
    );
}

export function FancyButton({ value }: { value: string }) {
    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const [borderColor, setBorderColor] = useState("border-midgray");

    return (
        <button
            onMouseEnter={ () => setBorderColor(randomColor()) }
            onMouseLeave={ () => setBorderColor("border-midgray") }
            onFocus={ () => setBorderColor(randomColor()) }
            onBlur={ () => setBorderColor("border-midgray") }
            className={`${montserrat.className} cursor-pointer antialiased rounded-lg px-3 py-2 duration-50 ease-out border-2 ${borderColor} hover:scale-105 focus:scale-105 outline-none`}
        >
            {value}
        </button>
    );
}
