"use client"

import { useEffect } from "react";
   
export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => {
        console.error(`Error: ${error}`);
    }, [error]);

    return (
        <div className="flex ">

        </div>
    );
}
