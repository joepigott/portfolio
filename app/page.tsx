import HighlightText from "./ui/highlight";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="h-[100svh] md:-mt-30 mb-5 flex justify-center items-center">
                <h1 className="text-center">Mission critical <HighlightText>software</HighlightText>, built with the precision of a  <HighlightText>physicist</HighlightText>.</h1>
            </div>
        </div>
    );
}
