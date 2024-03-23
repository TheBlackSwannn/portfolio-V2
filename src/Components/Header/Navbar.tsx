import Link, { LinkProps } from "./Link"
import fr from '../../assets/fr.svg'
import us from '../../assets/us.svg'

interface NavbarProps {
    links: LinkProps[];
    setLocale: (locale: string) => void;
}

function Navbar({ links, setLocale }: NavbarProps) {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link label={link.label} href={link.href} target={link.target} />
                    </li>
                ))}
                <li className="locale">
                        <img src={fr} alt="fr" onClick={() => setLocale('fr')}/>
                </li>
                <li className="locale">
                        <img src={us} alt="us" onClick={() => setLocale('en')}/>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;