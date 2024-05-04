import fb from '@/assets/icons/fb.svg';
import insta from '@/assets/icons/insta.svg';
import linkedin from '@/assets/icons/linkedin.svg';
import FooterIcon from '@/components/Footer/FooterIcon';
import { SOCIALLINKS } from '@/constants/SocialLinks';

import styles from './footer.module.css';

function SocialIcon() {
    return (
        <>
            <div className={styles.footerSocial}>
                <FooterIcon icon={fb} url={SOCIALLINKS.facebook} />
                <FooterIcon icon={insta} url={SOCIALLINKS.instagram} />
                <FooterIcon icon={linkedin} url={SOCIALLINKS.linkedin} />
            </div>
        </>
    );
}

export default SocialIcon;
