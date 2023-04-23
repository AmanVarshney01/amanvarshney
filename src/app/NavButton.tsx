import Link from "next/link";

export default function NavButton({title, href}: {title: string, href: string}) {
    return (
        <li className={""}>
            <Link href={href}>{title}</Link>
        </li>
    )
}