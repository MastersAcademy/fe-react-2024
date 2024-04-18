import styles from './about-me.module.css';
export const AboutMeComponent = () => {
    const aboutMeDescriptionStyle = styles['about-me-description'];

    return (
        <>
            <div className={styles['about-me-block']}>
                <img className={styles['about-me-avatar']} src="me.jpg" />
                <h2>About me</h2>
                <p className={aboutMeDescriptionStyle}>
                    Hi! My name is Dmytro and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={aboutMeDescriptionStyle}>
                    This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                </p>
                <p className={aboutMeDescriptionStyle}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={aboutMeDescriptionStyle}>You can contact me via [social network name] and check out my GitHub.</p>
            </div>
        </>
    );
};
