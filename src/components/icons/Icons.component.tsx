import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

import styles from './icons.module.css';

export const IconsComponent = () => (
    <div className={styles.iconsSet}>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
        </a>
    </div>
);
