import { FooterIcon } from '../FooterIcon/FooterIcon.tsx';
import Link from '../Link/Link';

import styles from './footer.module.css';
export const Footer = () => (
    <footer className={styles.footer}>
        <FooterIcon />
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
