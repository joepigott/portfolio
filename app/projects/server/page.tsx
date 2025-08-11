import { montserrat } from "@/app/ui/fonts";
import HighlightText from "@/app/ui/highlight";
import StyledImage from "@/app/ui/styled_image";
import Image, { StaticImageData } from "next/image";
import server_ascii_wide from "@/public/server/server_ascii_wide.png";
import server_hw from "@/public/server/server_hw.jpg";
import server_dash from "@/public/server/server_graph.png";
import server_login from "@/public/server/server_login.png";
import ts_small from "@/public/server/services/ts_small.png";
import immich from "@/public/server/services/immich.jpg";
import gitea from "@/public/server/services/gitea.png";
import nextcloud from "@/public/server/services/nextcloud.png";
import grafana from "@/public/server/services/grafana.png";
import mealie from "@/public/server/services/mealie.png";
import paperless from "@/public/server/services/paperless.png";
import firefly from "@/public/server/services/firefly.png";
import vaultwarden from "@/public/server/services/vaultwarden.png";
import { ReactNode } from "react";
import clsx from "clsx";

export default function Server() {
    return (
        <div className={`${montserrat.className} antialiased flex flex-col gap-40 md:-mt-12 items-center text-xl`}>
            <div className="flex flex-col gap-10 items-center">
                <StyledImage src={server_ascii_wide} alt="'home server' in in ascii characters" title="Home Server" />
                <h1>
                    <HighlightText>Self-hosted</HighlightText> services on{' '}
                    <HighlightText>self-owned</HighlightText> hardware.
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={server_dash} alt="A display of several server monitoring graphs" title="Grafana server dashboard" className="rounded-xl" />
                </div>
                <div className="flex-1">
                    <h2>
                        A fully-functional <HighlightText>home 
                        server</HighlightText> I use on the daily.
                    </h2>

                    Nearly all of my commonly-used online services have been
                    replaced with self-hosted alternatives: Gitea for git,
                    Immich for photos, Nextcloud for storage, etc.
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={server_hw} alt="A photo of the interior of a Dell Poweredge R620 server" title="Dell Poweredge R620" />
                </div>
                <div className="flex-1">
                    <h2>
                        Dedicated,{' '}
                        <HighlightText>enterprise-grade</HighlightText>{' '}
                        <HighlightText>hardware</HighlightText>.
                    </h2>

                    I run a Dell Poweredge R620, which has 32 total CPU cores,
                    128 GB of RAM, and 2.5 TB of total storage.
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div className="flex-1">
                    <StyledImage src={server_login} alt="A notification alerting that someone has logged into the server" title="`gotify` security notifications" />
                </div>
                <div className="flex-1">
                    <h2>
                        Robust <HighlightText>security</HighlightText> and{' '}
                        <HighlightText>monitoring</HighlightText>.
                    </h2>

                    Firewall rules are strictly enforced, and all public 
                    services <strong>must</strong> run through a reverse proxy.
                    The server is monitored for logins, critical file changes,
                    and <code>sudo</code> usage, which instantly notifies me
                    via gotify.
                </div>
            </div>
            <div className="flex flex-col gap-10 items-center justify-center">
                <h2 className="text-center">
                    A few of the services I run:
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
                    <IconLink href="/projects/taskscheduler" src={ts_small} alt="Task Scheduler" title="Task Scheduler" className="rounded-lg" />
                    <IconLink href="https://immich.app" src={immich} alt="Immich" title="Immich" className="rounded-lg" />
                    <IconLink href="https://about.gitea.com" src={gitea} alt="Gitea" title="Gitea" className="rounded-lg" />
                    <IconLink href="https://nextcloud.com" src={nextcloud} alt="Nextcloud" title="Nextcloud" className="rounded-lg" />
                    <IconLink href="https://grafana.com" src={grafana} alt="Grafana" title="Grafana" className="rounded-lg" />
                    <IconLink href="https://mealie.io" src={mealie} alt="Mealie" title="Mealie" className="rounded-lg" />
                    <IconLink href="https://docs.paperless-ngx.com" src={paperless} alt="Paperless" title="Paperless" className="rounded-lg" />
                    <IconLink href="https://firefly-iii.org" src={firefly} alt="Firefly III" title="Firefly III" className="rounded-lg" />
                    <IconLink href="https://github.com/dani-garcia/vaultwarden" src={vaultwarden} alt="Vaultwarden" title="Vaultwarden" className="rounded-lg" />
                    <DynamicGridBox className="flex items-center p-5 font-bold rounded-lg col-span-3"><h2>and several more!</h2></DynamicGridBox>
                </div>
            </div>
        </div>
    );
}

export function IconLink({ href, src, alt, title, className }: { href: string, src: StaticImageData, alt: string, title?: string, className?: string }) {
    return (
        <a href={href}>
            <Image 
                src={src} 
                alt={alt} 
                title={title || ""} 
                className={`duration-50 ease-out hover:scale-105 focus:scale-105 outline-none ${className}`} />
        </a>
    );
}

export function DynamicGridBox({ children, className }: { children: ReactNode, className?: string }) {
    const colors = [
        "bg-celeste",
        "bg-tomato",
        "bg-periwinkle",
        "bg-faded-blue",
        "bg-slate-blue"
    ];

    const bgColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className={clsx(
            `${bgColor} ${className}`,
            {
                "text-background": bgColor === "bg-celeste"
            }
        )}>
            {children}
        </div>
    )
}
