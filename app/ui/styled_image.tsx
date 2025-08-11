import Image, { StaticImageData } from "next/image";

export default function StyledImage({ src, alt, title, className }: { src: StaticImageData, alt: string, title?: string, className?: string }) {
    return <Image
        src={src}
        alt={alt}
        title={title || ""}
        className={`rounded-xl shadow-[0_0_20px_5px]/50 shadow-midgray ${className}`}
    />;
}
