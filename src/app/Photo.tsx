import Image from "next/image";
import photo from 'public/batman.webp'

export default function Photo () {
    return (
        <div>
            <Image className={"rounded-full w-1/4 h-auto"} width={300} height={300} src={photo} alt={"Aman Varshney"} />
        </div>
    )
}