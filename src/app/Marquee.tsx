
export default function Marquee({text}:{text: string}) {
    return (
        <div id={"marquee-container"} className={"lg:max-w-[43vw] w-full flex justify-start overflow-hidden tracking-widest text-2xl uppercase whitespace-nowrap bg-[#121212] text-white"}>
            <h2 className={"pl-6"}>{text}</h2>
            <h2 className={"pl-6"}>{text}</h2>
        </div>
    )
}