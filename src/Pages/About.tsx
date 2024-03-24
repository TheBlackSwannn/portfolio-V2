import Cv from '../Components/Cv/Cv';
import { useLocale } from './Layout';

function About() {
    const { locale } = useLocale();
            return (
                <div className="main">
                    <div className="about">
                        <div className="mobile-message">
                            <p>{locale === 'fr' ? 'Pour afficher mon CV directement dans le navigateur, veuillez visiter ce site sur un ordinateur.' : 'To display my resume directly in the browser, please visit this site on a computer.'}</p>
                            <p>{locale === 'fr' ? 'Toutefois, vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.' : 'However, you can download my resume by clicking on the button below.'}</p>
                            <a href={locale === 'fr' ? 'cv_fr.pdf' : 'cv_en.pdf'} download={locale === 'fr' ? 'swan_frere_fr.pdf' : 'swan_frere_en.pdf'}>{locale === 'fr' ? 'Télécharger' : 'Download'}</a>
                        </div>
                        <div className='desktop-cv'>
                            <Cv />
                        </div>
                    </div>
                </div>
        );
}

export default About;