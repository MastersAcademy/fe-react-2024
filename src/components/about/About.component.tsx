import '../../index.css';
import styles from './about.module.css';

export function AboutComponent() {
    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.main__heading}>About Me</h1>
                <p className={styles.main__text}>
                    Hi! My name is [Name] and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={styles.main__text}>
                    This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                </p>
                <p className={styles.main__text}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={styles.main__text}>You can contact me via [social network name] and check out my GitHub.</p>
            </main>
        </>
    );
}
