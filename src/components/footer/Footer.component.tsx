import facebookLogo from '../../assets/FacebookLogo.svg';
import instagramLogo from '../../assets/InstagramLogo.svg';
import linkedinLogo from '../../assets/LinkedinLogo.svg';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <hr />
        <div className={styles.logosContainer}>
            <img className={styles.facebookLogo} src={facebookLogo} alt="Facebook" />
            <img className={styles.instagramLogo} src={instagramLogo} alt="Instagram" />
            <img className={styles.linkedinLogo} src={linkedinLogo} alt="Linkedin" />
        </div>
        <p className={styles.textFooter}>
            Made with 💗 on course{' '}
            <a href="https://www.mastersacademy.education/frontend-for-beginners-it">
                &lsquo;Intro to React&rsquo; from Masters Academy in 2024
            </a>{' '}
            by Vladyslav Brusentsov
        </p>
    </footer>
);
