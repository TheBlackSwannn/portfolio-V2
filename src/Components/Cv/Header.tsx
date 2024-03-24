import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faGlobe, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLocale } from "../../Pages/Layout";

function Header() {
    const { locale } = useLocale();

    return (
        <div className="header">
            <div className="title">
                <h1>Swan Frere</h1>
                <h2>{locale === 'fr' ? 'Ingénieur Logicial - Web' : 'Software Engineer - Web'}</h2>
            </div>
            <div className="details">
                <ul>
                    <li><i><FontAwesomeIcon icon={faPhone} /></i><span>+33 (0)6 38 98 80 06</span></li>
                    <li><i><FontAwesomeIcon icon={faAt} /></i><span>frereswan@outlook.fr</span></li>
                    <li><i><FontAwesomeIcon icon={faLocationDot} /></i><span>Lyon - France</span></li>
                    <li><i><FontAwesomeIcon icon={faLinkedin} /></i><span>Swan Frere</span></li>
                    <li><i><FontAwesomeIcon icon={faGlobe} /></i><span>https://swan-frere.fr</span></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;