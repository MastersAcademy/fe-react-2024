import { SocialIcon } from './socialIcon/socialIcon.component.tsx';

import styles from './footer.module.css';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <hr className={styles.line}></hr>
            <div className={styles.footer__content}>
                <SocialIcon />
                <h3 className={styles.copyright}>
                    Made with 💗 on course{' '}
                    <span className={styles.copyright__color}>&apos;Intro to React&apos; from Masters Academy in 2024</span> by Vasyl Biliak
                </h3>
            </div>
        </div>
    </footer>
);
