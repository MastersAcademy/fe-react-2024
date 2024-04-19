import redRock from '@/assets/red rock.png';

import styles from './about.module.css';
export const AboutComponent = () => (
    <main className={styles.main}>
        <div className={styles.box}>
            <div className={styles.boxText}>
                <h1 className={styles.h1}>About me</h1>
                <p className={styles.text}>
                    Hi! My name is Artur and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system. <br />
                    <br /> This page was developed during the course{' '}
                    <a href="https://www.mastersacademy.education/frontend-react-it" target="_blank" rel="noopener noreferrer">
                        &apos;Intro to React&apos;
                    </a>{' '}
                    from Masters Academy in 2024. <br />
                    <br /> This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create
                    my own small project for the portfolio. <br />
                    <br /> You can contact me via{' '}
                    <a href="https://www.linkedin.com/in/artur-kobylatsky/" target="_blank" rel="noopener noreferrer">
                        Linkedin
                    </a>{' '}
                    and check out my{' '}
                    <a href="https://github.com/Allocene" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    .
                </p>
            </div>
            <div className={styles.image}>
                <img src={redRock} alt="red rock" />
            </div>
        </div>
    </main>
);
