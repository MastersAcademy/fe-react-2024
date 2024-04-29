import FacebookIcon from '@/assets/icons/facebook.svg?react';
import InstagramIcon from '@/assets/icons/instagram.svg?react';
import LinkedinIcon from '@/assets/icons/linkedin.svg?react';
import { fbLink } from '@/links.tsx';
import { linkedLink } from '@/links.tsx';
import { instagramLink } from '@/links.tsx';
import { mastersLink } from '@/links.tsx';

import styles from './footer.module.css';

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={`${styles.footer__row} ${styles.content}`}>
            <article className={`${styles.footer__socials} ${styles.facebook__icon}`}>
                <a href={fbLink} className={`${styles.footer__link} ${styles.footer__icon}`}>
                    <FacebookIcon className={styles.footer__icon} />
                </a>
                <a href={linkedLink} className={styles.footer__link}>
                    <LinkedinIcon className={styles.footer__icon} />
                </a>
                <a href={instagramLink} className={styles.footer__link}>
                    <InstagramIcon className={styles.footer__icon} />
                </a>
            </article>
            <div className={styles.footer__text}>
                Made with 💗 on course&nbsp;
                <a href={mastersLink} className={styles.footer__link}>
                    &apos; Intro to React &apos; from Masters Academy
                </a>
                &nbsp;in 2024, by Bogdan Yatsentiuk
            </div>
        </div>
    </footer>
);
