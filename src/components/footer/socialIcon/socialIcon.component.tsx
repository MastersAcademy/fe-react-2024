import instaImg from '../../../assets/footer/insta.svg';
import linkedinImg from '../../../assets/footer/linkedin.svg';
import fbImg from '../../../assets/footer/Vector.svg';

import styles from './socialIcon.module.css';

export const SocialIcon = () => (
    <ul className={styles.social_icon}>
        <li className={styles.icon__fb}>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <img src={fbImg} alt="icon fb" />
            </a>
        </li>
        <li className={styles.icon__link}>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="icon linkedin" />
            </a>
        </li>
        <li className={styles.icon__inst}>
            <a href="https://www.instagram.com/">
                <img src={instaImg} alt="icon insta" />
            </a>
        </li>
    </ul>
);
