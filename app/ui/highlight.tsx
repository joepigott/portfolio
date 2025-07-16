const colors = [
    "text-celeste",
    "text-tomato",
    "text-periwinkle",
    "text-faded-blue",
    "text-slate-blue"
];

export default function HighlightText( { children }: { children: React.ReactNode }) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
        <span className={`${color} font-bold`}>
            {children}
        </span>
    );
}
