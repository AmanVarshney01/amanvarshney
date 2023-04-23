import ProjectContainer from "@/app/projects/ProjectContainer";

export default function Page() {
    return (
        <main className="w-full h-full ">
            <div className={"w-full flex flex-col  p-10 "}>
                <div className={"mb-10"}>
                    <h1 className={"text-3xl"}>Projects</h1>
                </div>
                <ProjectContainer />
            </div>
        </main>
    )
}