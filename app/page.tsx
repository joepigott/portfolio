import HighlightText from "./ui/highlight";
import Image from "next/image";
import profile_photo from '../public/profile.jpg';
import usu from '../public/usu.jpg'
import awe_zoomed from '../public/awe_zoomed.jpg';
import { montserrat } from "./ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Joe Pigott",
    description: "Joe Pigott's Portfolio - Home Page",
};

export default function Home() {
    return (
        <div className={`${montserrat.className} text-xl antialiased flex flex-col gap-40`}>
            <div className="h-[80svh] md:-mt-25 -mb-30 flex justify-center items-center">
                <h1 className="text-center">Mission critical <HighlightText>software</HighlightText>, built with the precision of a  <HighlightText>physicist</HighlightText>.</h1>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-5">
                <div className="flex-1">
                    <Image src={profile_photo} alt="A picture of me, presenting my physics research" className="rounded-xl flex-1" />
                </div>
                <div className="flex-2">
                    <h2>
                        Hi, I'm <HighlightText>Joe</HighlightText> -- a 
                        software engineer with a background in
                        physics, and a passion for building tools that solve
                        {' '}<HighlightText>real-world problems</HighlightText>.
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse gap-5">
                <div className="flex-1">
                    <Image src={usu} alt="USU campus in the fall" className="rounded-xl flex-1" />
                </div>
                <div className="flex-2">
                    <h2>
                        In May 2025, I graduated from Utah State University
                        with a bachelor's degree in 
                        {' '}<HighlightText>physics</HighlightText>,
                        {' '}and minors in 
                        {' '}<HighlightText>mathematics</HighlightText>
                        {' '}and
                        {' '}<HighlightText>computer science</HighlightText>.
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-5">
                <div className="flex-1">
                    <Image src={awe_zoomed} alt="AWE Mission outreach at the Kennedy Space Center" className="rounded-xl flex-1" />
                </div>
                <div className="flex-2">
                    <h2>
                        Through Utah State University, I worked on the 
                        {' '}<HighlightText>NASA</HighlightText>
                        {' '}<HighlightText>AWE Mission</HighlightText>
                        {' '}for two years, writing internal tooling and 
                        maintaining and administrating servers.
                    </h2>
                </div>
            </div>
        </div>
    );
}
