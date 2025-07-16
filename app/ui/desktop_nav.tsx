import { space_grotesk } from "./fonts";
import Link from "next/link";

export function DesktopNavBar({ displayType }: { displayType: string }) {
    return (
        <nav className={`sticky top-4 z-50 mt-4 mx-4 rounded-full bg-background/60 backdrop-blur ${displayType} border-1 border-lowgray`}>
            <div className={`${space_grotesk.className} antialiased flex gap-5 p-5 text-xl`}>
                <Link href="/">Home </Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}
