import { ReactComponent as YoutueImage } from './youtube.svg';
import { ReactComponent as InstagemImage } from './instagram.svg';
import { ReactComponent as LinkedinImage } from './linkedin.svg';

import './styles.css';

export default function Footer() {
    
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutueImage />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedinImage />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagemImage />
                </a>
            </div>
        </footer>
    );
}