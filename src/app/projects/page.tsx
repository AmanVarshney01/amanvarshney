import ProjectContainer from "@/app/projects/ProjectContainer";

export default function Page() {
    return (
        <main className="w-full h-full">
            <div className={"w-full flex flex-col lg:px-10 lg:pt-10 px-6 pt-6"}>
                <div className={"mb-10"}>
                    <h1 className={"text-3xl"}>Projects</h1>
                </div>
                <ProjectContainer />
            </div>
        </main>
    )
}