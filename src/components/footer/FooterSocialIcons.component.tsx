import FacebookIconSVG from '@/assets/icons/socials/facebook.svg?react';
import InstagramIconSVG from '@/assets/icons/socials/instagram.svg?react';
import LinkedinIconSVG from '@/assets/icons/socials/linkedin.svg?react';

import styles from './footer-social-icons.module.css';

export const FooterSocialIconsComponent = () => (
    <div className={styles.footerSocialIcons}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookIconSVG title="Facebook logo" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramIconSVG title="Instagram logo" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <LinkedinIconSVG title="Linkedin logo" />
        </a>
    </div>
);
