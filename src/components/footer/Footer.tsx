import FooterIcon from '../FooterIcon/FooterIcon.tsx';
import Link from '../Link/Link';

import styles from './footer.module.css';
export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerIcons}>
            <FooterIcon icon="src/assets/fb.png" url="https://www.facebook.com/" className={styles.fbIcon} />
            <FooterIcon icon="src/assets/linkedin.png" url="https://www.linkedin.com/in/artur-kobylatsky/" className={styles.linkIcon} />
            <FooterIcon icon="src/assets/insta.png" url="https://www.instagram.com/art_k_z/" className={styles.instIcon} />
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
