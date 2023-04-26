
import Marquee from "@/app/Marquee";
import Photo from "@/app/Photo";

export default function Home() {
  return (
      <main className="w-full h-full">
          <div className={"w-full h-full flex flex-col lg:p-10 p-6"}>
              <div className={"flex flex-col gap-4 h-full"}>
                  <Photo />
                  <h1 className={"text-3xl"}>Aman Varshney</h1>
                  <p className={"leading-8 text-justify"}>I am a first year <strong>B.Tech CSE student</strong> with a keen interest in web development. My current focus is on building projects using Next.js, Tailwind. As a continuous learner, I am always striving to improve my skills and create exciting new web experiences.</p>
                  <div className={"flex-1"}></div>
                  <div className={"flex items-center justify-center w-full"}>
                      <Marquee text={"Next.js Tailwind React Svelte Javascript Typescript Python C/C++"} />
                  </div>
              </div>
          </div>
      </main>
  )
}
