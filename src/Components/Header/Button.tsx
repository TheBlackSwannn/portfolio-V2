import { NavLink } from "react-router-dom";

function Button({ label, href }: { label: string; href: string; }) {
    return (
        <NavLink to={href} className="button shine">
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
        </NavLink>
    );
}

export default Button;