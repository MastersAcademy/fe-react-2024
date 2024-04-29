// import fbLogo from '../../assets/icons/facebook.svg';
// import instLogo from '../../assets/icons/instagram.svg';
// import linkedLogo from '../../assets/icons/linkedin.svg';

import styles from './footer.module.css';

const fbLink = 'https://uk-ua.facebook.com/';
const linkedLink = 'https://www.linkedin.com/in/%D0%B1%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD-%D1%8F%D1%86%D0%B5%D0%BD%D1%82%D1%8E%D0%BA-841247270/';
const instagramLink = 'https://www.instagram.com/aipiservis/';
const mastersLink = 'https://www.mastersacademy.education/';
const fbLogo = '#facebook';
const linkedinLogo = '#linkedin';
const instLogo = '#instagram';

export const FooterComponent = () => (
    <footer className={styles.footer}>
        <div className={`${styles.footer__row} ${styles.content}`}>
            <article className={`${styles.footer__socials} ${styles.facebook__icon}`}>
                <a href={fbLink} className={styles.footer__link}>
                    {/* <img src={fbLogo} alt="facebook" className={styles.footer__icon} />*/}
                    <svg className={styles.footer__icon}></svg>
                    <use xlinkHref={fbLogo} />
                </a>
                <a href={linkedLink} className={styles.footer__link}>
                    <img src={linkedinLogo} alt="facebook" className={styles.footer__icon} />
                </a>
                <a href={instagramLink} className={styles.footer__link}>
                    <img src={instLogo} alt="facebook" className={styles.footer__icon} />
                </a>
            </article>
            <div className={styles.footer__text}>
                Made with 💗 on course
                <a href={mastersLink} className={styles.footer__link}>
                    &apos;Intro to React&apos; from Masters Academy
                </a>
                in 2024, by Bogdan Yatsentiuk
            </div>
        </div>
    </footer>
);
