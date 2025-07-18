import { Metadata } from "next";
import Image from "next/image";
import HighlightText from "../ui/highlight";
import awe_photo from '../../public/awe.jpg';
import soc_photo from '../../public/soc_photo.jpg';
import research_photo from '../../public/research_photo.jpg';
import waterfall from '../../public/waterfall_sorted.jpg';
import { montserrat } from "../ui/fonts";

export const metadata: Metadata = {
    title: "About",
    description: "Joe Pigott's Portfolio - About"
};

export default function About() {
    return (
        <div className={`${montserrat.className} text-xl antialiased flex flex-col gap-40`}>
            <div className="flex flex-col items-center md:flex-row-reverse gap-5">
                <div className="h-[100%] flex-1">
                    <Image 
                        src={soc_photo} 
                        title="The USU AWE team in the science operation center" 
                        alt="The USU AWE team in the science operation center"
                        className="rounded-xl flex-1" />
                </div>
                <div className="h-[100%] flex-1">
                    <h2>
                        <HighlightText>NASA</HighlightText>
                        {' '}<HighlightText>AWE</HighlightText> 
                        {' '}<HighlightText>Mission</HighlightText> Experience
                    </h2>

                    I wrote software for Utah State University on the NASA AWE 
                    Mission for two years. Working directly under the mission
                    PI Mike Taylor (and later Ludger Scherliess), I developed 
                    internal tooling to process and store PostGIS 
                    representations of satellite data and facilitate data 
                    transfer between USU and NASA servers. I was also partially
                    responsible for server maintenance and administration.
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-5">
                <div className="h-[100%] flex-1">
                    <Image 
                        src={research_photo} 
                        title="2025 USU Spring Research Symposium presentation" 
                        alt="A photo of me standing in front of my poster presentation at the 2025 USU Spring Research Symposium"
                        className="rounded-xl flex-1"
                    />
                </div>
                <div className="h-[100%] flex-1">
                    <h2>Battle-Tested in <HighlightText>Research</HighlightText></h2>

                    My senior research was on anomalies in the literature data
                    for electron-phonon coupling in copper. By collecting as
                    much historical data as possible, I was able to determine
                    what should have been the best possible value for the 
                    strength of electron-phonon interactions. However, this was
                    far below what experimental methods suggest. The physics is
                    all there, which leads me to believe there is significant
                    systematic error in the literature data.
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse gap-5">
                <div className="h-[100%] flex-1">
                    <Image 
                        src={awe_photo} 
                        title="AWE Mission outreach at the Kennedy Space Center" 
                        alt="Me and two colleagues, performing AWE mission outreach at the Kennedy Space Center"
                        className="rounded-xl flex-1"
                    />
                </div>
                <div className="h-[100%] flex-1">
                    <h2>
                        Clear and Effective
                        {' '}<HighlightText>Communication</HighlightText>
                    </h2>

                    I taught introductory physics labs for life science majors 
                    for three years at Utah State, with several of my students 
                    switching into the physics program after taking the course.
                    While on the AWE team, I performed mission outreach many 
                    times, including at the Kennedy Space Center leading up to
                    the mission launch (right). While presenting my research at
                    the 2025 USU Spring Research Symposium (above), I recieved
                    "expert" marks in all categories, with one evaluator noting
                    me as the best presenter of the year.
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-5">
                <div className="h-[100%] flex-1">
                    <Image 
                        src={waterfall} 
                        title="Bridal Veil Falls, pixel sorted with threshold" 
                        alt="An image of a waterfall, which has been pixel sorted to achieve a glitchy effect" 
                        className="rounded-xl flex-1" 
                    />
                </div>
                <div className="h-[100%] flex-1">
                    <h2>
                        A Passion for
                        {' '}<HighlightText>Great Software</HighlightText>
                    </h2>

                    I taught introductory physics labs for life science majors 
                    for three years at Utah State, with several of my students 
                    switching into the physics program after taking the course.
                    While on the AWE team, I performed mission outreach many 
                    times, including at the Kennedy Space Center leading up to
                    the mission launch (right). While presenting my research at
                    the 2025 USU Spring Research Symposium (above), I recieved
                    "expert" marks in all categories, with one evaluator noting
                    me as the best presenter of the year.
                </div>
            </div>
        </div>
    );
}
