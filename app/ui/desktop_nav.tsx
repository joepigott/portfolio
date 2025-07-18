import { space_grotesk } from "./fonts";
import NavLink from "./navlink";

export function DesktopNavBar({ displayType }: { displayType: string }) {
    return (
        <nav className={`sticky top-4 z-50 mt-4 mx-4 rounded-full bg-background/60 backdrop-blur ${displayType} border-1 border-lowgray`}>
            <div className={`${space_grotesk.className} antialiased flex gap-5 p-5 text-xl font-bold`}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}
