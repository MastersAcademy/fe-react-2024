import aboutImage from '../../assets/about.jpg';

import aboutStyles from './about.module.css';

export const AboutMeComponent = () => (
    <div className={aboutStyles.container}>
        <img className={aboutStyles.image} src={aboutImage} alt="Space img" />
        <div className={aboutStyles.text}>
            <h1 className={aboutStyles.title}>About Me</h1>
            <div className={aboutStyles.description}>
                <p>
                    Hi! My name is Serhii and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like
                    React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p>
                    This page was developed during the course <span className={aboutStyles.underline}>&apos;Intro to React&apos;</span> from
                    Masters Academy in 2024.
                </p>
                <p>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p>
                    You can contact me via <a href="https://www.facebook.com/profile.php?id=100011329003177">FaceBook</a> and check out
                    my&nbsp;
                    <a href="https://github.com/SerhiiTrokhymets">GitHub</a>.
                </p>
            </div>
        </div>
    </div>
);
