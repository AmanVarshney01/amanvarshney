import SocialButton from "@/app/SocialButton";
import github from 'public/github.svg'
import linkedin from 'public/linkedin.svg'
import twitter from 'public/twitter.svg'

export default function Footer () {
    return (
        <footer className={"p-4 flex flex-row justify-between items-center"}>
            <div>
                <a className={"font-medium"} href="mailto: av.amanvarshney11@gmail.com">av.amanvarshney11@gmail.com</a>
            </div>
            <div className={"flex flex-row gap-4"}>
                <SocialButton title={"Github"} href={"https://github.com/AmanVarshney01"} src={github} />
                <SocialButton title={"Twitter"} href={"https://twitter.com/amanvarshney01"} src={twitter} />
                <SocialButton title={"LinkedIn"} href={"https://www.linkedin.com/in/amanvarshney11/"} src={linkedin} />
            </div>
        </footer>
    )
}