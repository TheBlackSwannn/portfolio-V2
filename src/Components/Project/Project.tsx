import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import './Project.scss';



function Project({ project, scroll, setScroll }: { project: Project, scroll: boolean, setScroll: (scroll: boolean) => void }) {
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

    return (
        <div ref={projectRef} className="project" style={{
            opacity: !isVisible && project.index !== 0 ? 0 : 1,
            position: 'relative',
            left: !isVisible && project.index !== 0 ? (project.isOdd ? '-100px' : '100px') : 0,
            transition: 'all 0.5s ease-in-out',
        }}>
            <div className='title'>
                <div className="img-wrapper" tabIndex={project.index}>
                    {project.images.map((image, i) => <span key={i}><img src={image} alt="" /></span>)}
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
                        {project.technos.map((techno, i) => <li key={i} style={{ backgroundColor: techno.color }}>{techno.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;