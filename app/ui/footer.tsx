import { montserrat } from "./fonts";

export default function Footer() {
    return (
        <footer className={`${montserrat.className} antialiased m-4 pt-4 border-t-1 border-lowgray`}>
            {/* main content. links and such */}
            <div>

            </div>

            {/* copyright */}
            <div className="flex justify-center items-center mt-3">
                <span>© 2025 Joe Pigott - All Rights Reserved.</span>
            </div>
        </footer>
    );
}
