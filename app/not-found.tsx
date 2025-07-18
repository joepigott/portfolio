import FancyLink from "./ui/fancylink";
import { montserrat } from "./ui/fonts";

export default function NotFound() {
    return (
        <div className={`flex flex-col h-[50svh] mt-30 md:mt-0 md:px-30 items-center justify-center text-xl ${montserrat.className}`}>
            <h1 className="mb-10">404 (Not Found)</h1>
            <div className="text-center">
                Looks like you got lost! If you followed a link to this page
                there has been a mistake. Please report it to{' '}
                <FancyLink href="mailto:joepigott@joepigott.dev?subject=Broken%20Link">Joe</FancyLink>.
            </div>
        </div>
    );
}
