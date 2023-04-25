import Image from "next/image";
import photo from 'public/batman.webp'
import Marquee from "@/app/Marquee";

export default function Home() {
  return (
      <main className="w-full h-full ">
          <div className={"w-full flex flex-col lg:px-10 lg:pt-10 px-6 pt-6"}>
              <div className={"flex flex-col gap-4 h-full"}>
                  <Image className={"rounded-full w-1/5 h-auto"} width={300} height={300} src={photo} alt={"Aman Varshney"} />
                  <h1 className={"text-3xl"}>Aman Varshney</h1>
                  <p className={"leading-8 text-justify"}>I am a first year B.Tech CSE student with a keen interest in web development. My current focus is on building projects using Next.js, Tailwind. As a continuous learner, I am always striving to improve my skills and create exciting new web experiences.</p>
                  <div className={"flex items-center justify-center w-full"}>
                      <Marquee text={"Next.js Tailwind React Svelte Javascript Typescript Python"} />
                  </div>
              </div>
          </div>
      </main>
  )
}
