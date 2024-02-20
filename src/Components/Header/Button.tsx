import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Button({ label, href }: { label: string; href: string; }) {
    const [ticking, setTicking] = useState(true),
        [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => ticking && setCount(count + 1), 1e3)
        return () => clearTimeout(timer)
    }, [count, ticking])

    return (
        <NavLink to={href} className={"button " + (count % 20 == 0 ? "animated" : "")}>
            {label}
        </NavLink>
    );
}

export default Button;