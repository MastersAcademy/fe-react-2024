import facebookIcon from '../../assets/facebook.png';
import instagmramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/link.png';
import FooterIcon from '../FooterIcon/FooterIcon.tsx';
import Link from '../Link/Link';

import styles from './footer.module.css';
export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerIcons}>
            <FooterIcon icon={facebookIcon} url="https://www.facebook.com/" className={styles.fbIcon} />
            <FooterIcon icon={linkedinIcon} url="https://www.linkedin.com/in/artur-kobylatsky/" className={styles.linkIcon} />
            <FooterIcon icon={instagmramIcon} url="https://www.instagram.com/art_k_z/" className={styles.instIcon} />
        </div>
        <div className={styles.footerText}>
            <p>
                Made with 💗 on course{' '}
                <Link
                    href="https://www.mastersacademy.education/frontend-react-it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mocLink}
                >
                    &apos;Intro to React&apos; from Masters Academy in 2024
                </Link>{' '}
                by Kobylatski Artur
            </p>
        </div>
    </footer>
);
