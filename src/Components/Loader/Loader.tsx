import { useRef } from 'react';
import './Loader.css';

function Loader() {
    const loaderRef = useRef(null);

    return (
        <div ref={loaderRef} className="loader" onAnimationEnd={(e) => { if (loaderRef.current !== null) loaderRef.current.classList.add('hidden') }}>
            <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" dy="-0.40em" textAnchor="middle" className="text-up">SWAN</text>
                <text x="50%" y="50%" dy="0.60em" textAnchor="middle" className="text-down">FRERE</text>
            </svg>
        </div>
    );
}

export default Loader;