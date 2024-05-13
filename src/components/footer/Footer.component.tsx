import React from 'react';

import faceBookIcons from '../../assets/facebook.png';
import linkedIn from '../../assets/in.png';
import instagram from '../../assets/inst.png';

import FooterIcon from './FooterIcon.tsx';

import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <hr />
                <div className={styles.icon}>
                    <FooterIcon icon={faceBookIcons} url="https://www.facebook.com/master.of.code.team/" />
                    <FooterIcon icon={linkedIn} url="https://www.linkedin.com/company/master-of-code/" />
                    <FooterIcon icon={instagram} url="https://www.instagram.com/master.of.code.team/" />
                </div>
                <div className={styles.description}>
                    <p>
                        {' '}
                        Made with 💗 on course
                        <a href="https://www.mastersacademy.education/frontend-for-beginners-it">`Intro to React`</a>
                        from Masters Academy in 2024, by Andriy Voloshchuk
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
