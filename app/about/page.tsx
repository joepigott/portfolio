import { Metadata } from "next";
import StyledImage from "@/app/ui/styled_image";
import HighlightText from "@/app/ui/highlight";
import awe_photo from '@/public/awe/awe.jpg';
import soc_photo from '@/public/awe/soc_photo.jpg';
import research_photo from '@/public/misc/research_photo.jpg';
import awe_soc_1 from '@/public/awe/awe_soc_1.jpg';
import whiteboard from '@/public/misc/whiteboard.jpg';
import baby_photo from '@/public/misc/baby_photo.jpg';
import { montserrat } from "@/app/ui/fonts";
import FancyLink from "@/app/ui/fancylink";

export const metadata: Metadata = {
    title: "About",
    description: "Joe Pigott's Portfolio - About"
};

export default function About() {
    return (
        <div className={`${montserrat.className} text-xl antialiased flex flex-col gap-40`}>
            <div className="flex flex-col items-center md:flex-row-reverse gap-10">
                <div className="flex-1">
                    <StyledImage 
                        src={soc_photo} 
                        title="The USU AWE team in the science operation center" 
                        alt="The USU AWE team in the science operation center"
                        className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        <HighlightText>NASA</HighlightText>{' '}
                        <HighlightText>AWE Mission</HighlightText>{' '}
                         Experience
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
            <div className="flex flex-col items-center md:flex-row gap-10">
                <div className="flex-1">
                    <StyledImage 
                        src={whiteboard} 
                        title="Quantum Mechanics II Homework" 
                        alt="A photo of a whiteboard filled with the solution to a quantum mechanics problem"
                        className="rounded-xl flex-1"
                    />
                </div>
                <div className="flex-1">
                    <h2><HighlightText>Physics</HighlightText> Educated</h2>
                    
                    In May 2025, I obtained a bachelor's degree in physics,
                    with minors in mathematics and computer science. I took all
                    available standard courses, including classical mechanics,
                    electrostatics and electrodynamics, thermodynamics, two 
                    semesters of quantum mechanics, as well as several courses
                    in the lab. While these taught me plenty about physics,
                    they also gave me strong critical thinking and 
                    problem-solving skills that are applicable in many other
                    industries.
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse gap-10">
                <div className="flex-1">
                    <StyledImage 
                        src={research_photo} 
                        title="2025 USU Spring Research Symposium presentation" 
                        alt="A photo of me standing in front of my poster presentation at the 2025 USU Spring Research Symposium"
                        className="rounded-xl flex-1"
                    />
                </div>
                <div className="flex-1">
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
            <div className="flex flex-col items-center md:flex-row gap-10">
                <div className="flex-1">
                    <StyledImage 
                        src={awe_photo} 
                        title="AWE Mission outreach at the Kennedy Space Center" 
                        alt="Me and two colleagues, performing AWE mission outreach at the Kennedy Space Center"
                        className="rounded-xl flex-1"
                    />
                </div>
                <div className="flex-1">
                    <h2>
                        Clear and Effective
                        {' '}<HighlightText>Communication</HighlightText>
                    </h2>

                    I taught introductory physics labs for life science majors 
                    for three years at Utah State, with several of my students 
                    switching into the physics program after taking the course.
                    While on the AWE team, I performed mission outreach many 
                    times, including at the Kennedy Space Center leading up to
                    the mission launch. For my research presentation at the 
                    2025 USU Spring Research Symposium, I recieved "expert" 
                    marks in all categories, with one evaluator noting me as 
                    the best presenter of the year.
                </div>
            </div>
            <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 md:row-span-2">
                    <h2>
                        A Passion for
                        {' '}<HighlightText>Great Software</HighlightText>
                    </h2>

                    <p>
                        When I was young, I was fascinated by the internet and
                        obsessed with making websites; by the time I was in the
                        fourth grade, I was building Yik-Yak clones on my dad's
                        laptop, but I didn't know how to serve them over the 
                        internet. 
                    </p>

                    <p>
                        Fast-forward to today, and I'm serving over a dozen 
                        services on this domain through my own server hardware.
                        While making websites has taken a backseat (this was 
                        painful for me), I'm still very passionate about 
                        developing software, especially tools that are useful.
                        Whether it be processing NASA data, writing a{' '}
                        <FancyLink href="/projects/taskscheduler">smart
                        todo list</FancyLink>, or even developing a tool to 
                        count the number of homework pages I wrote in college
                        (over 2000), I love applying my skills to solve 
                        problems that matter to people.
                    </p>

                    <p>
                        I'm always looking forward to learning new things, and
                        I'm excited to share my talents where they're needed.
                    </p>
                </div>
                <StyledImage 
                    src={awe_soc_1} 
                    title="Members of the AWE science and software teams in the science operation center" 
                    alt="An image of scientists and programmers at their computers" 
                    className="rounded-xl order-1 md:order-2" 
                />
                <StyledImage
                    src={baby_photo}
                    title="Me as a child"
                    alt="A photo of me as a child"
                    className="rounded-xl order-3 md:order-3"
                />
            </div>
        </div>
    );
}
