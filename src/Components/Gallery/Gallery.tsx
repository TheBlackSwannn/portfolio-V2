import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../Hooks/getWindowDimensions';
import './Gallery.css';

function Gallery({ index, title, images, isOdd = false, scroll, setScroll }: { index: number, title: string, images: Array<string>, isOdd: boolean, scroll: boolean, setScroll: (scroll: boolean) => void }) {
    const galleryRef = useRef<HTMLDivElement>(null);
    const { height } = useWindowDimensions();
    const [isVisible, setIsVisible] = useState(false);

    function update() {
        if (galleryRef.current) {
            const pos = galleryRef.current.getBoundingClientRect();
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
        <div ref={galleryRef} className="gallery" style={{
            opacity: !isVisible && index !== 0 ? 0 : 1,
            position: 'relative',
            left: !isVisible && index !== 0 ? (isOdd ? '-100px' : '100px') : 0,
            transition: 'all 0.5s ease-in-out',
        }}>
            {isOdd && <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora distinctio ratione ullam illo eos quas placeat, odit blanditiis perferendis consequatur assumenda laudantium odio repellendus porro error quaerat eum provident.
            </p>}
            <div>
                <div className="img-wrapper" tabIndex={index}>
                    {images.map((image, i) => <span key={i}><img src={image} alt="" /></span>)}
                </div>
                <h3>{title}</h3>
            </div>
            {!isOdd && <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis tempora distinctio ratione ullam illo eos quas placeat, odit blanditiis perferendis consequatur assumenda laudantium odio repellendus porro error quaerat eum provident.
            </p>}
        </div>
    );
}

export default Gallery;