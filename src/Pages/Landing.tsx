import Loader from "../Components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero/Hero";

const Landing = () => {
    const main = useRef<HTMLDivElement>(null);
    const [firstVisit, setFirstVisit] = useState(false);

    useEffect(() => {
        const visited = localStorage.getItem('visited');
        if (visited) {
            const item = JSON.parse(visited);
            const now = new Date().getTime();
            if (now - item.date > 1000 * 60 * 60 * 24) {
                localStorage.removeItem('visited');
            }
        }

        if (!visited) {
            const item = {
                visited: true,
                date: new Date().getTime()
            }
            localStorage.setItem('visited', JSON.stringify(item));
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