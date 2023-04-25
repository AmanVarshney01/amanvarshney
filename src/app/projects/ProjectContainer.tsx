import ProjectCard from "@/app/projects/ProjectCard";
import NewsVerifier from 'public/projects/News Verifier.png'
import CollegeClub from 'public/projects/College Club.png'
import suggestmeaman from 'public/projects/suggestmeaman.png'

export default function ProjectContainer() {

    return (
        <div id={"project-container"} className={"lg:overflow-y-auto lg:max-h-[72vh] grid lg:grid-cols-2 sm:grid-cols-2 gap-3 p-1"}>
            <ProjectCard src={NewsVerifier} name={"News Verifier"} description={"News Verifier Website"}/>
            <ProjectCard src={CollegeClub} name={"College Club Template"}/>
            <ProjectCard src={suggestmeaman} name={"Suggest Me Aman"}/>
        </div>
    )
}