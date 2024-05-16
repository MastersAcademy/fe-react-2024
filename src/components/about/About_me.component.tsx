import aboutImage from '@/assets/image.png';

import styles from './about_me.module.css';

export const AboutMeComponents = () => (
    <main className={styles.aboutMe}>
        <img className={styles.aboutMeImage} src={aboutImage} alt=" Orange stairs to the top " />
        <article className={styles.aboutMeText}>
            <h1 className={styles.aboutMeHeader}>About me </h1>
            <p className={styles.aboutMeDescription}>
                Hi! My name is Andriy Voloshtchuk and I`m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                React, HTML, CSS, JavaScript and Git version control system.
                <br />
                <br />
                This page was developed during the course
                <a href="https://www.mastersacademy.education/frontend-for-beginners-it"> `Intro to React`</a> from Masters Academy in 2024.
                <br />
                <br />
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
                <br />
                <br />
                You can contact me via Telegram @Hyper22 and check out my <a href=" https://github.com/PixelsPioneer ">GitHub </a>.
            </p>
        </article>
    </main>
);
