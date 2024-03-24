import { faBriefcase, faCircleArrowRight, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import translations from './translations';
import { useLocale } from '../../Pages/Layout';

function Content() {
    const { locale } = useLocale();

    return (
        <div className="content">
            <div className="work-experiences">
                <h3><i><FontAwesomeIcon icon={faBriefcase} /></i>{translations[locale as keyof typeof translations].experience.title}</h3>
                <ul>
                    {translations[locale as keyof typeof translations].experience.items.map((item, index) => (
                        <li key={index}>
                            <div className="title">
                                <span className='job'>{item.job}</span>
                                <span className='company'>{item.company}</span>
                                <span className='place'>{item.place}</span>
                                <span className='date'>{item.date}</span>
                            </div>
                            <ul className="tasks">
                                {item.tasks.map((task, index) => (
                                    <li key={index}><i><FontAwesomeIcon icon={faCircleArrowRight} /></i>{task}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="education">
                <h3><i><FontAwesomeIcon icon={faGraduationCap} /></i>{translations[locale as keyof typeof translations].education.title}</h3>
                <ul>
                    {translations[locale as keyof typeof translations].education.items.map((item, index) => (
                        <li key={index}>
                            <div className="title">
                                <span className='degree'>{item.degree}</span>
                                <span className='school'>{item.school}</span>
                                <span className='place'>{item.place}</span>
                                <span className='date'>{item.date}</span>
                            </div>
                            <ul className="tasks">
                                {item.tasks.map((task, index) => (
                                    <li key={index}><i><FontAwesomeIcon icon={faCircleArrowRight} /></i>{task}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Content;