import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useLocale } from '../../Pages/Layout';
import Aside from './Aside';
import Content from './Content';
import Header from './Header';
import './Cv.scss';

function Cv() {
  const { locale } = useLocale();

  return (
    <section className='cv'>
      <a href={locale === 'fr' ? 'cv_fr.pdf' : 'cv_en.pdf'} download={locale === 'fr' ? 'swan_frere_fr.pdf' : 'swan_frere_en.pdf'}><FontAwesomeIcon icon={faDownload} /></a>
      <Aside />
      <div className="vertical-container">
        <Header />
        <Content />
      </div>
    </section>
  );
}

export default Cv;