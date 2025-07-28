import { montserrat } from '../../ui/fonts';
import StyledImage from "../../ui/styled_image";
import ts_ascii_wide from '../../../public/ts_ascii_wide.png';
import ts_usage from '../../../public/ts_usage.png';
import ts_api from '../../../public/ts_api.png';
import ts_priority from '../../../public/ts_priority.png';
import ts_server from '../../../public/ts_server.png';
import HighlightText from "@/app/ui/highlight";
import { Metadata } from "next";
import FancyLink from '@/app/ui/fancylink';

export const metadata: Metadata = {
    title: "Task Scheduler",
    description: "Joe Pigott's Portfolio - Projects - Task Scheduler"
};

export default function TaskScheduler() {
    return (
        <div className={`${montserrat.className} antialiased flex flex-col gap-20 md:-mt-15 items-center text-xl`}>
            <div className="flex flex-col gap-5 items-center">
                <StyledImage src={ts_ascii_wide} alt='The words "Task Scheduler" in ASCII art' title="Task Scheduler" className="rounded-2xl" />
                <h1>
                    A <HighlightText>smart todo list</HighlightText> that{' '}
                    <HighlightText>optimizes</HighlightText> your schedule for you.
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={ts_priority} alt='A code snippet detailing a first-in-first-out priority implementation' title="FIFO priority implementation" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        Based on <HighlightText>CPU scheduling</HighlightText>
                        {' '}principles.
                    </h2>

                    Task Scheduler was designed to optimize the order in which
                    you complete your todo list by treating your tasks like CPU
                    tasks.
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={ts_server} alt="Output of the 'tasksd' program at startup" title="'tasksd' logs at startup" />
                </div>
                <div className="flex-1">
                    <h2>
                        Full <HighlightText>server/client</HighlightText>{' '}
                        architecture.
                    </h2>

                    The bulk of Task Scheduler's logic resides in{' '}
                    <code>tasksd</code>, which can be easily served from a 
                    server or docker container.
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={ts_usage} alt="Usage information for the Task Scheduler cli client" title="Task Scheduler client usage" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        A feature-complete{' '}
                        <HighlightText>CLI client</HighlightText>.
                    </h2>

                    The reference client is fully functional, allowing you to
                    add, remove, update, complete, query, and filter tasks
                    easily from the command line.
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={ts_api} alt="Output of 'curl' command accessing the 'tasksd' server" title="'curl' accessing API endpoints" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        Open and easy <HighlightText>REST API</HighlightText>.
                    </h2>

                    The server exposes many intuitive API endpoints, which 
                    makes developing new clients or widgets quick and easy.
                </div>
            </div>
            <div>
                <h2>
                    Check out the project on{' '}
                    <FancyLink 
                        href="https://github.com/joepigott/taskscheduler"
                    >
                        Github
                    </FancyLink>.
                </h2>
            </div>
        </div>
    );
}
