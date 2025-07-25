import FancyLink from "../ui/fancylink";
import { montserrat } from "../ui/fonts";
import HighlightText from "../ui/highlight";
import Image from "next/image";
import waterfall from '../../public/waterfall_sorted.jpg';
import ts_ascii from '../../public/ts_ascii.png';
import server_graph from '../../public/server_graph.png';

export default function Projects() {
    return (
        <div className={`${montserrat.className} antialiased text-xl flex flex-col gap-40 px-5`}>
            <div className="flex flex-col items-center md:flex-row gap-10">
                <div className="flex-1">
                    <Image src={ts_ascii} alt='The words "Task Scheduler" in ASCII art' title="Task Scheduler" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        <FancyLink href="/projects/taskscheduler">Task Scheduler</FancyLink>
                    </h2>
                    <h3>
                        A smart todo list based on CPU scheduling principles,
                        with full server/client functionality and hot-swappable 
                        scheduling algorithms. Written fully in{' '}
                        <HighlightText>Rust</HighlightText>.
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row-reverse gap-10">
                <div className="flex-1">
                    <Image src={waterfall} alt="An image of a waterfall with a glitchy effect" title="Bridal Veil Falls, pixel sorted with threshold" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        <FancyLink href="/projects/pixels">Pixels</FancyLink>
                    </h2>
                    <h3>
                        A GUI pixel sorting application to achieve unique 
                        visual effects, written in{' '}
                        <HighlightText>Rust</HighlightText>.
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-10">
                <div className="flex-1">
                    <Image src={server_graph} alt="A display of several server monitoring graphs" title="Grafana Server Dashboard" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        <FancyLink href="/projects/server">Server Infrastructure</FancyLink>
                    </h2>
                    <h3>
                        Self-hosted services on self-owned hardware.
                    </h3>
                </div>
            </div>
        </div>
    );
}
