import styles from './about.module.css';

export function AboutComponent() {
    return (
        <>
            <main className={styles.about}>
                <section className={styles.about__imageContainer}>
                    <img className={styles.about__image} src="./src/assets/image.jpg" alt="aboutMe" />
                </section>
                <section className={styles.about__description}>
                    <h1 className={styles.about__heading}>About Me</h1>
                    <p className={styles.about__text}>
                        Hi! My name is Andrii Morozov and I&apos;m a Junior Frontend Developer. I am already familiar with main Web
                        Technologies like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className={styles.about__text}>
                        This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                    </p>
                    <p className={styles.about__text}>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className={styles.about__text}>
                        You can contact me via{' '}
                        <a target="blanc" href="https://t.me/slonyara8888">
                            telegram
                        </a>{' '}
                        and check out my{' '}
                        <a target="blanc" href="https://github.com/">
                            GitHub
                        </a>
                        .
                    </p>
                </section>
            </main>
        </>
    );
}
