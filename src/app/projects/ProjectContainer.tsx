import ProjectCard from "@/app/projects/ProjectCard";
import NewsVerifier from 'public/projects/News Verifier.png'

export default function ProjectContainer() {

    return (
        <div id={"project-container"} className={"overflow-y-auto h-[65vh] grid grid-cols-2"}>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
            <ProjectCard src={NewsVerifier} name={"News Verifier"}/>
        </div>
    )
}