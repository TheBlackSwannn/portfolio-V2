import { useState } from "react";
import Project from "../Components/Project/Project";
import './Pages.css';

function Projects( {projects}: { projects: Array<Project> } ) {
    const [scroll, setScroll] = useState(false);

    

    return (
        <div className="main">
            <div className="projects" onScroll={() => setScroll(true)}>
                {projects.map((project, i) => <Project key={i} index={project.index} title={project.title} description={project.description} note={project.note} link={project.link} images={project.images} technos={project.technos} isOdd={project.isOdd} scroll={scroll} setScroll={setScroll} />)}
            </div>
        </div>
    );
}

export default Projects;