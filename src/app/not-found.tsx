"use client"
import Image from "next/image";
import sadMeme from 'public/sad-crying-face.gif'

export default function NotFound() {
    return (
        <div className={"h-full"}>
            <Image width={100} height={100} loading={"lazy"} className={" p-10 w-full h-auto"} src={sadMeme} alt={"Sad"} />
            <div className={"flex flex-col justify-center items-center gap-4"}>
                <h1 className={"text-lg font-bold "}>Sorry Page Not Found</h1>
                <button className={"underline text-blue-600"} onClick={() => window.location.reload()}>Refresh Page</button>
            </div>
        </div>
    );
}