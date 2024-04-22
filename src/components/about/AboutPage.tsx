import AboutImage from '@/assets/about_image.png';

import styles from './AboutPage.module.css';

function About() {
    return (
        <>
            <main>
                <section>
                    <div className={styles.aboutFlex}>
                        <img className={styles.aboutImage} src={AboutImage} alt="about" width="300" height="300" />
                        <div className={styles.aboutText}>
                            <h1 className={styles.aboutTitle}>About Me</h1>
                            <p>
                                Hi! My name is Igor Orel and I&apos;m a Junior Frontend Developer. I am already familiar with main Web
                                <br />
                                Technologies like React, HTML, CSS, JavaScript and Git version control system.
                            </p>
                            <p>
                                This page was developed during the course{' '}
                                <a className={styles.link} href="https://www.mastersacademy.education/frontend-react-it">
                                    &apos;Intro to React&apos;
                                </a>{' '}
                                from Masters Academy in 2024.
                            </p>
                            <p>
                                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to
                                create my own small project for the portfolio.
                            </p>
                            <p>You can contact me via instagram igor08060 and check out my GitHub.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;
