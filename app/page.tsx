import HighlightText from "./ui/highlight";
import Image from "next/image";
import research_photo from '../public/research_photo.jpg';
import awe_photo from '../public/awe.jpg';
import { montserrat } from "./ui/fonts";

export default function Home() {
    return (
        <div className={`${montserrat.className} text-lg antialiased flex flex-col gap-12`}>
            <div className="h-[100svh] md:-mt-30 flex justify-center items-center">
                <h1 className="text-center">Mission critical <HighlightText>software</HighlightText>, built with the precision of a  <HighlightText>physicist</HighlightText>.</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="h-[100%] flex-1">
                    <Image src={awe_photo} alt="AWE Mission outreach at the Kennedy Space Center" className="rounded-xl flex-1" />
                </div>
                <div className="h-[100%] flex-1">
                    <h2><HighlightText>NASA</HighlightText> AWE Mission Experience</h2>

                    I wrote software for Utah State University on the NASA AWE 
                    Mission for two years. Working directly under the mission
                    PI Ludger Scherliess, I developed internal tooling to 
                    process and store PostGIS representations of satellite 
                    data and facilitate data transfer between USU and NASA
                    servers.
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-5">
                <div className="h-[100%] flex-1">
                    <Image src={research_photo} alt="2025 USU Student Research Symposium presentation" className="rounded-xl flex-1" />
                </div>
                <div className="h-[100%] flex-1">
                    <h2>Battle-Tested in <HighlightText>Research</HighlightText></h2>

                    My senior research was on anomalies in the literature data
                    for electron-phonon coupling in copper.
                </div>
            </div>
        </div>
    );
}
