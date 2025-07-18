import "./globals.css";
import { DesktopNavBar } from "./ui/desktop_nav";
import { MobileNavBar } from "./ui/mobile_nav";
import { montserrat, space_grotesk } from "./ui/fonts";
import Footer from "./ui/footer";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${montserrat.variable} ${space_grotesk.variable}`}>
            <body className="min-h-screen flex flex-col">
                <DesktopNavBar displayType="hidden md:block" />
                <MobileNavBar displayType="block md:hidden" />
                <main className="flex-grow p-4 mt-18">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
