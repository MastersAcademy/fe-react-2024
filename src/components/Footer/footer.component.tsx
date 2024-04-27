import fb from '@/assets/fb.png';
import insta from '@/assets/insta.png';
import linkedin from '@/assets/linkedin.png';

import styles from './footer.module.css';

function Footer() {
    return (
        <>
            <footer className={styles.footerFlex}>
                <ul className={styles.footerSocial}>
                    <li>
                        <img src={fb} alt="" className={styles.fb} />
                    </li>

                    <li>
                        <img src={linkedin} alt="footer" className={styles.linkedin} />
                    </li>

                    <li>
                        <img src={insta} alt="" className={styles.insta} />
                    </li>
                </ul>
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
