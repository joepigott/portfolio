import Image, { StaticImageData } from "next/image";

const colors = [
    "shadow-celeste",
    "shadow-tomato",
    "shadow-periwinkle",
    "shadow-faded-blue",
    "shadow-slate-blue"
];

export default function StyledImage({ src, alt, title, className }: { src: StaticImageData, alt: string, title?: string, className?: string }) {
    const shadowColor = colors[Math.floor(Math.random() * colors.length)];

    return <Image
        src={src}
        alt={alt}
        title={title || ""}
        className={`rounded-xl shadow-[0_0_20px_5px]/15 ${shadowColor} ${className}`}
    />;
}
