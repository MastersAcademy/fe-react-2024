import React from 'react';

import { FacebookIcon } from '@/assets/icons/Facebook.tsx';
import { InstaIcon } from '@/assets/icons/Insta.tsx';
import { LinkedinIcon } from '@/assets/icons/Linkedin.tsx';

import styles from './footer.module.css';
export const Footer: React.FC = () => (
    <footer className={styles.footerWrapper}>
        <div className={styles.footerLine}> </div>
        <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/cherkasy.masters/?locale=uk_UA">
                <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/masters_academy__/">
                <LinkedinIcon />
            </a>
            <a href="https://www.linkedin.com/company/masters-academy-educational-project/">
                <InstaIcon />
            </a>
        </div>

        <p className={styles.footerText}>
            Made with 💗 on course&nbsp;
            <a className={styles.footerLink} href="https://www.mastersacademy.education/frontend-react-it">
                &apos;Intro to React &apos; from Masters Academy in 2024
            </a>
            &nbsp;, by Degtiar Alyona
        </p>
    </footer>
);
