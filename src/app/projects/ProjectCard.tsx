import Image from "next/image";

export default function ProjectCard ({src, name, description, link, github}: {src: any, name: string, description?: string, link?: string, github?: string}) {
    return (
        <div className={"p-3 flex flex-col gap-2"}>
            <Image width={350} src={src} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}