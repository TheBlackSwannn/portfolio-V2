import { useState } from "react";
import Gallery from "../Components/Gallery/Gallery";
import './Pages.css';

function Projects() {
    const [scroll, setScroll] = useState(false);

    const portfolioImages = [
        '/images/portfolio1.png',
        '/images/portfolio2.png',
        '/images/portfolio3.png',
    ];

    return (
        <div className="main">
            <div className="projects" onScroll={() => setScroll(true)}>
                <Gallery index={0} title="Portfolio" images={portfolioImages} isOdd={true} scroll={scroll} setScroll={setScroll} />
                <Gallery index={1} title="Portfolio" images={[]} isOdd={false} scroll={scroll} setScroll={setScroll} />
                <Gallery index={2} title="Portfolio" images={[]} isOdd={true} scroll={scroll} setScroll={setScroll} />
                <Gallery index={3} title="Portfolio" images={[]} isOdd={false} scroll={scroll} setScroll={setScroll} />
            </div>
        </div>
    );
}

export default Projects;