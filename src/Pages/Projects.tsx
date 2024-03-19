import { useState } from "react";
import Project from "../Components/Project/Project";
import './Pages.css';

function Projects( {projects}: { projects: Array<Project> } ) {
    const [scroll, setScroll] = useState(false);

    

    return (
        <div className="main">
            <div className="projects" onScroll={() => setScroll(true)}>
                {projects.map((project) => <Project key={project.index} project={project} scroll={scroll} setScroll={setScroll} />)}
            </div>
        </div>
    );
}

export default Projects;