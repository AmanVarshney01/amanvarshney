"use client"
import Image from "next/image";
import {motion as m} from "framer-motion";

export default function SocialButton({title, href, src}: {title: string, href: string, src: string}) {
    return (
        <m.a whileHover={{scale: 1.1}} className={"bg-white rounded-full p-1.5 shadow lg:w-8 lg:h-8 h-7 w-7"} target={"_blank"} href={href}><Image width={25} height={25} src={src} alt={title} /></m.a>
    )
}