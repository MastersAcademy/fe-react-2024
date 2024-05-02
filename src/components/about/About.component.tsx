import React from 'react';

import aboutImage from '../../public/about.png';

import styles from './about.module.css';

export const About: React.FC = () => (
    <div className={styles.aboutWrapper}>
        <div className={styles.aboutText}>
            <h1 className={styles.aboutTextHeader}>About Me</h1>
            <p className={styles.aboutTextPar}>
                Hi! My name is Alyona, and I&apos;m primarily a Backend Developer who is currently exploring the world of frontend
                development.
            </p>
            <p className={styles.aboutTextPar}>
                This page was developed during the course&nbsp;
                <a className={styles.aboutLink} href="https://www.mastersacademy.education/frontend-react-it">
                    &apos;Intro to React&apos;
                </a>
                &nbsp;from Masters Academy in 2024. This is a social project from MOCG company where I had the incredible opportunity to
                work with experienced Frontend mentors.
            </p>
            <p className={styles.aboutTextPar}>
                This project not only honed my technical abilities but also gave me a chance to contribute to a meaningful social cause and
                create a noteworthy project for my portfolio. You can contact me via&nbsp;
                <a className={styles.aboutLink} href="https://github.com/alyona-shirpal" target="_blank" rel="noreferrer">
                    GitHub Profile
                </a>
                &nbsp;to see more of my projects and contributions to the community.
            </p>
        </div>

        <div className={styles.imageWrapper}>
            <img className={styles.aboutImage} src={aboutImage} alt="about" />
        </div>
    </div>
);
