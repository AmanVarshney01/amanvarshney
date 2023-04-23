import NavButton from "@/app/NavButton";

export default function Navbar() {
    return (
        <nav className={"w-full p-4"}>
            <ul className={"flex flex-row w-full justify-evenly"}>
                <NavButton title={'Home'} href={'/'} />
                <NavButton title={'About'} href={'/about'} />
                <NavButton title={'Projects'} href={'/projects'} />
                {/*<NavButton title={'Home'} href={'/'} />*/}
                <li className={"font-medium text-lg hover:scale-110 transition duration-200"}>
                    <a href="https://amanvarshney.hashnode.dev/" rel="noopener noreferrer" target={"_blank"}>Blog</a>
                </li>
            </ul>
        </nav>
    )
}