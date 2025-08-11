import { Metadata } from "next";
import ContactForm from "@/app/contact/form";

export const metadata: Metadata = {
    title: "Contact",
    description: "Joe Pigott's Portfolio - Contact"
};

export default function Contact() {
    return (
        <div className="flex flex-col md:flex-row">
            <ContactForm />
        </div>
    );
}
