import { useRef, useState } from "react";
import Project from "../Components/Project/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "./Layout";
import ProjectsType from "../Shared/Interfaces/projects.interface";
import ProjectType from "../Shared/Interfaces/project.interface";

function Projects({ projects }: { projects: ProjectsType }) {
    const [scroll, setScroll] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const {locale} = useLocale();

    const handleScroll = () => {
        setScroll(true);
        
        if (scrollRef.current) {
            scrollRef.current.style.display = 'none';
        }
    }


    return (
        <div className="main">
            <div className="projects" onScroll={handleScroll}>
                {projects[locale as keyof typeof projects].map((project: ProjectType, index: number) =>
                    index === 1 ?
                        <>
                            <div ref={scrollRef} className="scroll-down">
                                <FontAwesomeIcon key={100} icon={faAnglesDown} />
                            </div>
                            <Project key={project.index} project={project} scroll={scroll} setScroll={setScroll} />
                        </>
                        :
                        <Project key={project.index} project={project} scroll={scroll} setScroll={setScroll} />
                )}
            </div>
        </div>
    );
}

export default Projects;