import React from 'react';

import fb from '@/assets/icons/fb.svg';
import insta from '@/assets/icons/insta.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import FooterIcon from '@/components/Footer/FooterIcon';

import styles from './footer.module.css';

function SocialIcon() {
    return (
        <>
            <div className={styles.footerSocial}>
                <FooterIcon icon={fb} url="https://facebook.com" />
                <FooterIcon icon={insta} url="https://instagram.com" />
                <FooterIcon icon={linkedin} url="https://linkedin.com" />
            </div>
        </>
    );
}

export default SocialIcon;
