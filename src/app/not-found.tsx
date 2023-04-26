"use client"
import Image from "next/image";
import sadMeme from 'public/sad_cat.jpeg'

export default function NotFound() {
    return (
        <div className={"h-full flex flex-col justify-center items-center gap-4"}>
            <Image width={100} height={100} loading={"lazy"} className={" w-1/2 h-auto"} src={sadMeme} alt={"Sad"} />
            <h1 className={"text-lg font-bold "}>Sorry Page Not Found</h1>
            <button className={"underline text-blue-600"} onClick={() => window.location.reload()}>Refresh Page</button>
        </div>
    );
}