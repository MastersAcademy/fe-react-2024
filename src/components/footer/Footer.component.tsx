import React from 'react';

import FooterIcon from './FooterIcon.tsx';

import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <hr />
                <div className={styles.icon}>
                    <FooterIcon icon="../fe-react-2024/src/assets/facebook.png" url="https://www.facebook.com/master.of.code.team/" />
                    <FooterIcon icon="../fe-react-2024/src/assets/in.png" url="https://www.linkedin.com/company/master-of-code/" />
                    <FooterIcon icon="../fe-react-2024/src/assets/inst.png" url="https://www.instagram.com/master.of.code.team/" />
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
