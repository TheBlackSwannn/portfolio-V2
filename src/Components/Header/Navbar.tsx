import Link, { LinkProps } from "./Link"

interface NavbarProps {
    links: LinkProps[];
    locale: string;
    setLocale: (locale: string) => void;
}

function Navbar({ links, locale, setLocale }: NavbarProps) {
    console.log(locale)
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link label={link.label} href={link.href} target={link.target} />
                    </li>
                ))}
                <li className="locale">
                    <button onClick={() => setLocale('fr')}>FR</button>
                    <button onClick={() => setLocale('en')}>EN</button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;