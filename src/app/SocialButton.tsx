"use client"
import Image from "next/image";
import {motion as m} from "framer-motion";

export default function SocialButton({title, href, src}: {title: string, href: string, src: string}) {
    return (
        <m.a whileHover={{scale: 1.1}} className={"bg-white rounded-full p-1.5 shadow w-8 h-8"} target={"_blank"} href={href}><Image width={25} height={25} src={src} alt={title} /></m.a>
    )
}