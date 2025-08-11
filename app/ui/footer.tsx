import { montserrat } from "@/app/ui/fonts";

export default function Footer() {
    return (
        <footer className={`${montserrat.className} antialiased p-5 mt-8 border-t-1 border-lowgray flex items-center justify-center`}>
            <span>© 2025 Joe Pigott - All Rights Reserved.</span>
        </footer>
    );
}
