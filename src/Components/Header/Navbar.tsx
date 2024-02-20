import Link, { LinkProps } from "./Link"

interface NavbarProps {
    links: LinkProps[];
}

function Navbar({ links }: NavbarProps) {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link label={link.label} href={link.href} target={link.target} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;