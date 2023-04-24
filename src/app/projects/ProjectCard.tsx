"use client"
import Image from "next/image";
import {AnimatePresence, motion as m} from "framer-motion";
import {useState} from "react";

export default function ProjectCard ({src, name, description, link, github}: {src: any, name: string, description?: string, link?: string, github?: string}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <m.div onClick={() => setIsOpen(!isOpen)} initial={{y:10, opacity: 0}} animate={{y:0, opacity: 1}} className={"p-3 flex flex-col gap-2"}>
            <Image className={"w-full"} width={350} src={src} alt={name} />
            <h2 className={"font-medium text-lg"}>{name}</h2>
            <AnimatePresence>
                {isOpen &&
                    <m.div transition={{duration: 0.1, ease: "linear"}} initial={{y:-5, opacity: 0}} animate={{y:0, opacity: 1}} exit={{y:-5, opacity: 0}} className={""}>
                        {description}
                    </m.div>
                }
            </AnimatePresence>
        </m.div>
    )
}