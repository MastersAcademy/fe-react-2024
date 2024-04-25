import aboutImage from '@/assets/aboutImage.png';

import styles from './about-me.module.css';

export const AboutMeComponents = () => (
    <main className={styles.aboutMe}>
        <img className={styles.aboutMeImage} src={aboutImage} alt="About me" />
        <article className={styles.aboutMeText}>
            <h1 className={styles.aboutMeHeader}>About me </h1>
            <p className={styles.aboutMeParagraph}>
                Hi! My name is Vladyslav Brusentsov and I`m a Junior Frontend Developer. I&apos;m already familiar with main Web Web
                Technologies like React, HTML, CSS, JavaScript and Git version control system.
                <br />
                <br />
                This page was developed during the course &lsquo;
                <a href="https://www.mastersacademy.education/frontend-for-beginners-it"> Intro to React </a> &rsquo; from Masters Academy
                Academy in 2024.
                <br />
                <br />
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
                <br />
                <br />
                You can contact me via Telegram: @Arconiel and check out my <a href="https://github.com/vBrusentsov">GitHub.</a>
            </p>
        </article>
    </main>
);
