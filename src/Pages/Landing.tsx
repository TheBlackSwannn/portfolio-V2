import Loader from "../Components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero/Hero";

const Landing = () => {
    const main = useRef<HTMLDivElement>(null);
    const [firstVisit, setFirstVisit] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem('visited');
        if (!visited) {
            localStorage.setItem('visited', 'true');
            setFirstVisit(true);
        }
    }, []);

    return (
        <>
            {firstVisit && <Loader />}

            <div ref={main} className="main">
                <Hero parent={main} />
            </div>
        </>
    );
};

export default Landing;