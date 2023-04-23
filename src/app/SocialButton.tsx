import Image from "next/image";

export default function SocialButton({title, href, src}: {title: string, href: string, src: string}) {
    return (
        <a className={"bg-white rounded-full p-1.5 shadow"} target={"_blank"} href={href}><Image width={25} height={25} src={src} alt={title} /></a>
    )
}