import HighlightText from "@/app/ui/highlight";
import StyledImage from "@/app/ui/styled_image";
import Image from "next/image";
import profile_photo from '@/public/misc/profile.jpg';
import awe_soc_1_cropped from '@/public/awe/awe_soc_1_cropped.jpg';
import usu from '@/public/misc/usu.jpg';
import awe_zoomed from '@/public/awe/awe_zoomed.jpg';
import { montserrat } from "@/app/ui/fonts";
import type { Metadata } from "next";
import rust from '@/public/languages/rust.svg';
import linux from '@/public/languages/linux.svg';
import nvim from '@/public/languages/nvim.svg';
import python from '@/public/languages/python.svg';
import cpp from '@/public/languages/cpp.svg';
import c from '@/public/languages/c.svg';
import tex from '@/public/languages/tex.svg';
import java from '@/public/languages/java.svg';
import nextjs from '@/public/languages/nextjs.svg';
import svelte from '@/public/languages/svelte.svg';
import git from '@/public/languages/git.svg';
import server from '@/public/languages/servers.svg';
import FancyLink from "./ui/fancylink";

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
            <div className="flex flex-col items-center md:flex-row gap-10">
                <div className="flex-1">
                    <StyledImage 
                        src={profile_photo} 
                        alt="A picture of me, presenting my physics research" 
                        className="flex-1"
                    />
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
            <div className="flex flex-col items-center md:flex-row-reverse gap-10">
                <div className="flex-1">
                    <StyledImage src={usu} alt="A photo of Utah State University's campus in the fall" className="rounded-xl flex-1" />
                </div>
                <div className="flex-2">
                    <h2>
                        In May 2025, I graduated from Utah State University
                        with a bachelor's degree in 
                        {' '}<HighlightText>physics</HighlightText>
                        {' '}and minors in 
                        {' '}<HighlightText>mathematics</HighlightText>
                        {' '}and
                        {' '}<HighlightText>computer science</HighlightText>.
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-10">
                <div className="flex-1">
                    <StyledImage src={awe_zoomed} alt="AWE Mission outreach at the Kennedy Space Center" className="rounded-xl flex-1" />
                </div>
                <div className="flex-2">
                    <h2>
                        Through Utah State University, I worked on the 
                        {' '}<HighlightText>NASA</HighlightText>
                        {' '}<HighlightText>AWE Mission</HighlightText>
                        {' '}for two years, developing internal tooling and 
                        maintaining and administrating servers.
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse gap-10">
                <div className="flex-1">
                    <StyledImage src={awe_soc_1_cropped} alt="A photo of me at my desk in the USU AWE science operation center" className="rounded-xl flex-1" />
                </div>
                <div className="flex-2">
                    <h2>
                        I'm passionate about
                        {' '}<HighlightText>good software</HighlightText> that
                        {' '}<HighlightText>solves problems</HighlightText>.
                        {' '}I tend to prioritize
                        {' '}<HighlightText>utility</HighlightText> over
                        {' '}<HighlightText>aesthetics</HighlightText>.
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10">
                <h2 className="flex-1 text-center">
                    <HighlightText>Languages</HighlightText> and 
                    {' '}<HighlightText>Technologies</HighlightText>
                </h2>
                <div className="flex-2 grid grid-cols-3 md:grid-cols-6">
                    <Image src={rust} alt="Rust logo" title="Rust" />
                    <Image src={c} alt="C logo" title="C" />
                    <Image src={cpp} alt="C++ logo" title="C++" />
                    <Image src={python} alt="Python logo" title="Python" />
                    <Image src={tex} alt="TeX logo" title="TeX/LaTeX" />
                    <Image src={java} alt="Java logo" title="Java" />
                    <Image src={linux} alt="Linux logo" title="Linux" />
                    <Image src={nvim} alt="Neovim logo" title="Vim" />
                    <Image src={nextjs} alt="Next.js logo" title="Next.js" />
                    <Image src={svelte} alt="Svelte logo" title="Svelte/Sveltekit" />
                    <Image src={git} alt="Git logo" title="Git" />
                    <Image src={server} alt="Generic server icon" title="Self-hosting" />
                </div>
            </div>
            <div className="-mt-20 mb-10">
                <h2 className="text-center">
                    Take a look at some of my{' '}
                    <FancyLink href="/projects">projects</FancyLink>!
                </h2>
            </div>
        </div>
    );
}
