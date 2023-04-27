"use client"
import Image from "next/image";
import {AnimatePresence, motion as m} from "framer-motion";
import {useState} from "react";
import dropdown from "public/dropdown.svg";

export default function ProjectCard ({src, name, description, link, github}: {src: any, name: string, description?: string, link?: string, github?: string}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <m.div className={"p-3 flex flex-col gap-2 h-min"}>
            <Image placeholder={"blur"} loading={"lazy"} className={"w-full"} width={350} src={src} alt={name} />
            <div className={"flex flex-row justify-between items-center"}>
                <h2 className={"font-medium text-lg"}>{name}</h2>
                <m.div animate={{rotate: isOpen ? 180 : 0}} className={"hover:cursor-pointer bg-gray-200 rounded-full"} onClick={() => setIsOpen(!isOpen)}>
                    <Image width={20} height={20} src={dropdown} alt={"arrow"} />
                </m.div>
            </div>
            <AnimatePresence key={name}>
                {isOpen &&
                    <m.div transition={{duration: 0.1, ease: "linear"}} initial={{y:-5, opacity: 0}} animate={{y:0, opacity: 1}} exit={{y:-5, opacity: 0}} className={""}>
                        <p>{description}</p>
                        <div className={"flex flex-row gap-2 mt-1"}>
                            {link && <a href={link} target={"_blank"} className={"underline text-blue-600"}>Open</a>}
                            {github && <a href={github} target={"_blank"} className={"underline text-blue-600"}>Github</a>}
                        </div>
                    </m.div>
                }
            </AnimatePresence>
        </m.div>
    )
}