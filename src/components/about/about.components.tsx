import aboutImage from '@/assets/about_image/image.svg';

import styles from './about.module.css';
function aboutcomponent() {
    return (
        <div className={styles.about}>
            <img className={styles.about__image} src={aboutImage} alt="Image" />
            <div className={styles.about__content}>
                <h1 className={styles.about__title}>About me</h1>
                <p className={styles.about__description}>
                    Hi! My name is Sviatoslav and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={styles.about__description}>
                    This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                </p>
                <p className={styles.about__description}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={styles.about__description}>
                    You can contact me via{' '}
                    <a className={styles.about__link} href="https://www.instagram.com/sviat_taranenko" target="_blank">
                        Instagram
                    </a>{' '}
                    and check out my{' '}
                    <a className={styles.about__link} href="https://github.com/SviatoslavTaranenko" target="_blank">
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}

export { aboutcomponent };
