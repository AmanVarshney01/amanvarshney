"use client";
import Link from "next/link";
import {motion as m} from "framer-motion";
import {usePathname} from "next/navigation";


export default function NavButton({title, href}: {title: string, href: string}) {
    const path = usePathname()
    return (
        <m.li whileHover={{scale: 1.1}} className={""}>
            <Link className={"relative transition ease-in duration-200 font-medium text-lg"} href={href}>
                {href === path && (<m.span layoutId="nav-underline" className={"absolute left-0 top-full block h-[2px] bg-black w-full"} />)}
                {title}
            </Link>
        </m.li>
    )
}