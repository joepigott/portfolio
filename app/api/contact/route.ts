import { NextRequest, NextResponse } from "next/server";

export type ContactFormData = {
    name: string,
    email: string,
    message: string
};

export async function POST(request: NextRequest) {
    const body: ContactFormData = await request.json();

    const { name, email, message } = body;
    const gotifyURL = process.env.GOTIFY_URL;
    const gotifyToken = process.env.GOTIFY_KEY;

    if (!gotifyURL || !gotifyToken) {
        return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
    }

    try {
        const response = await fetch(`${gotifyURL}/message?token=${gotifyToken}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Contact Form Submission",
                message: `From: ${name} <${email}>\n\n${message}`,
                priority: 5
            })
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
        } else {
            return NextResponse.json({ success: true });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
    }
}
