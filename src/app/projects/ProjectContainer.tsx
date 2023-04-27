import ProjectCard from "@/app/projects/ProjectCard";
import NewsVerifier from 'public/projects/News Verifier.png'
import CollegeClub from 'public/projects/College Club.png'
import SuggestMeAman from 'public/projects/suggestmeaman.png'

export default function ProjectContainer() {

    return (
        <div id={"project-container"} className={"lg:overflow-y-auto lg:max-h-[72vh] grid lg:grid-cols-2 sm:grid-cols-2 gap-3 p-1"}>
            <ProjectCard src={NewsVerifier}
                         name={"News Verifier"}
                         description={"News Verifier is a web application that utilizes APIs to provide users with accurate fact checks and relevant news articles."}
                         link={"https://news-verifier.vercel.app/"}
                         github={"https://github.com/AmanVarshney01/news-verifier"}
            />
            <ProjectCard src={CollegeClub}
                         name={"College Club Template"}
                         description={"College Club Template is designed to help college clubs create a professional and functional website with ease."}
                         link={"https://college-club.vercel.app/"}
                         github={"https://github.com/AmanVarshney01/college-club"}
                         inDevelopment={true}
            />
            <ProjectCard src={SuggestMeAman}
                         name={"Suggest Me Aman"}
                         description={"My Handpicked suggestions of movies, anime, shows, animated movies."}
                         link={"https://suggestmeaman.vercel.app/"}
                         github={"https://github.com/AmanVarshney01/SuggestMeAman"}
                         inDevelopment={true}
            />
        </div>
    )
}