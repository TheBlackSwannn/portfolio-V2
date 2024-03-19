import { useEffect, useRef, useState } from 'react';
import './Project.scss';
import useWindowDimensions from '../../Hooks/useWindowDimensions';



function Project({ index, title, description, note = null, link, images, technos, isOdd = false, scroll, setScroll }: { index: number, title: string, description: string, note: string|null, link: string, images: Array<string>, technos: Array<Techno>,isOdd: boolean, scroll: boolean, setScroll: (scroll: boolean) => void }) {
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
            opacity: !isVisible && index !== 0 ? 0 : 1,
            position: 'relative',
            left: !isVisible && index !== 0 ? (isOdd ? '-100px' : '100px') : 0,
            transition: 'all 0.5s ease-in-out',
        }}>
            <div className='title'>
                <div className="img-wrapper" tabIndex={index}>
                    {images.map((image, i) => <span key={i}><img src={image} alt="" /></span>)}
                </div>
                <h3>{title}</h3>
            </div>
            <div className="caption">
                <p>
                    {description}
                    {note && <>
                        <br />
                        <i>{note}</i>
                    </>}
                </p>
                <a className={('#' === link ? 'disabled ' : '') + "link"} href={link} target={'#' === link ? '' : 'blank'}><span>Visit</span></a>
                <div className="technos">
                    <ul>
                        {technos.map((techno, i) => <li key={i} style={{ backgroundColor: techno.color }}>{techno.name}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;