import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import profile from '../../assets/profile.webp'
import translations from './translations';
import { useLocale } from '../../Pages/Layout';

function Aside() {
    const { locale } = useLocale();

    return (
        <aside>
            <div className="photo">
                <img src={profile} alt="Swan Frere" />
            </div>
            <div className="languages">
                <h3><i><FontAwesomeIcon icon={faPlay} /></i>{translations[locale as keyof typeof translations].languages.title}</h3>
                <ul>
                    {translations[locale as keyof typeof translations].languages.items.map((item, index) => (
                        <li key={index}>
                            <span className='title'>{item.title}</span>
                            <span className='subtitle'>{item.subtitle}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="skills">
                <h3><i><FontAwesomeIcon icon={faPlay} /></i>{translations[locale as keyof typeof translations].skills.title}</h3>
                <ul>
                    {translations[locale as keyof typeof translations].skills.items.map((item, index) => (
                        <li key={index}>
                            <i className={item.icon}></i>
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hobbies">
                <h3><i><FontAwesomeIcon icon={faPlay} /></i>{translations[locale as keyof typeof translations].hobbies.title}</h3>
                <ul>
                    {translations[locale as keyof typeof translations].hobbies.items.map((item, index) => (
                        <li key={index}>
                            <i className={item.icon}></i>
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Aside;