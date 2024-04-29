import SocialIcon from './SocialIcon.component';

import styles from './footer.module.css';

function Footer() {
    return (
        <>
            <footer className={styles.footerFlex}>
                <SocialIcon />
                <p className={styles.footerText}>
                    Made with 💗 on course{' '}
                    <a className={styles.link} href="https://www.mastersacademy.education/frontend-react-it">
                        &apos;Intro to React&apos from Masters Academy in 2024
                    </a>
                    , by Igor Orel
                </p>
            </footer>
        </>
    );
}

export default Footer;
