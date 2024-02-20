import { NavLink } from "react-router-dom";

export interface LinkProps {
    label: string;
    href: string;
    target: string;
}

function Link({ label, href, target }: LinkProps) {

    return (
        <NavLink
            to={href}
            target={target}
        >
            {label}
        </NavLink>
    );
}

export default Link;