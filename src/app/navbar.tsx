import Link from "next/link";


export default function Navbar() {
    return (
        <nav className={"fixed right-0 top-0 "}>
            <ul className={""}>
                <li className={""}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={""}>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={""}>
                    <Link href={"/projects"}>Projects</Link>
                </li>
                <li className={""}>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                <li className={""}>
                    <a href="https://amanvarshney.hashnode.dev/" rel="noopener noreferrer" target={"_blank"}>Blog</a>
                </li>
            </ul>
        </nav>
    )
}