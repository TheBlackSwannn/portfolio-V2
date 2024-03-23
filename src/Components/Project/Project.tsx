import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Project.scss';
import Techno from '../../Shared/Interfaces/techno.interface';
import ProjectType from '../../Shared/Interfaces/project.interface';



function Project({ project, scroll, setScroll }: { project: ProjectType, scroll: boolean, setScroll: (scroll: boolean) => void }) {
    const projectRef = useRef<HTMLDivElement>(null);
    const { height } = useWindowDimensions();
    const [isVisible, setIsVisible] = useState(false);

    function update() {
        if (projectRef.current) {
            const pos = projectRef.current.getBoundingClientRect();
            if (pos.y / height < 0.75) {
                setIsVisible(true);
            }
            setScroll(false);
        }
    }

    useEffect(() => {
        if (scroll) {
            update();
        }
    }, [scroll]);

    const seeFull = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        const img = e.target as HTMLImageElement;
        const full = document.createElement('div');
        full.className = 'full-image';
        full.style.cssText = 'background-image: url(' + img.src + ');';

        full.onclick = function () {
            full.remove();
        };
        document.body.appendChild(full);
    }

    return (
        <div ref={projectRef} className="project" style={{
            opacity: !isVisible && project.index !== 0 ? 0 : 1,
            position: 'relative',
            left: !isVisible && project.index !== 0 ? (project.isOdd ? '-100px' : '100px') : 0,
            flexDirection: project.isOdd ? 'row-reverse' : 'row',
            transition: 'all 0.5s ease-in-out',
        }}>
            <div className='title'>
                <div className="img-wrapper" tabIndex={project.index}>
                    {project.images.map((image: string, i: number) =>
                    <span tabIndex={i} key={i}>
                        <img src={image} alt="" onClick={(e) => seeFull(e)} />
                    </span>
                    )}
                </div>
                <h3>{project.title}</h3>
            </div>
            <div className="caption">
                <p>
                    {project.description}
                    {project.note && <>
                        <br />
                        <i>{project.note}</i>
                    </>}
                </p>
                <a className={('#' === project.link ? 'disabled ' : '') + "link"} href={project.link} target={'#' === project.link ? '' : 'blank'}><span>Visit</span></a>
                <div className="technos">
                    <ul>
                        {project.technos.map((techno: Techno, i: number) => <li key={i} style={{ backgroundColor: techno.color }}>{techno.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;