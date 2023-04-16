import Link from "next/link";


export default function Navbar() {
    return (
        <nav className={""}>
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
            </ul>
        </nav>
    )
}