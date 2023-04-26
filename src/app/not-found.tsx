import Image from "next/image";
import sadMeme from 'public/sad-crying-face.gif'

export default function NotFound() {
    return (
        <div className={"h-full"}>
            <Image className={"w-full h-auto"} src={sadMeme} alt={"Sad"} />
            <h1 className={"text-lg text-center font-bold my-6"}>Sorry Page Not Found</h1>
        </div>
    );
}