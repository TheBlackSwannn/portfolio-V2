import { useState } from "react";
import Project from "../Components/Project/Project";
import './Pages.css';

function Projects( {projects}: { projects: Array<Project> } ) {
    const [scroll, setScroll] = useState(false);

    

    return (
        <div className="main">
            <div className="projects" onScroll={() => setScroll(true)}>
                {projects.map((projects, i) => <Project key={i} index={projects.index} title={projects.title} images={projects.images} technos={projects.technos} isOdd={projects.isOdd} scroll={scroll} setScroll={setScroll} />)}
            </div>
        </div>
    );
}

export default Projects;