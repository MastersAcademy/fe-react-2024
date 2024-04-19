import aboutImage from '../../public/about.png';

import styles from './about.module.css';

export const About = () => (
    <div className={styles.aboutWrapper}>
        <div className={styles.aboutText}>
            <h1> About Me </h1>
            <p>
                Hi! My name is Alyona, and I&apos;m primarily a Backend Developer who is currently exploring the world of frontend
                development. I have a strong foundation in backend technologies and have recently started learning React to broaden my skill
                set.
            </p>
            <p>
                {' '}
                This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024. This is a social project
                from MOCG company where I had the incredible opportunity to work with experienced Frontend mentors.{' '}
            </p>
            <p>
                This project not only honed my technical abilities but also gave me a chance to contribute to a meaningful social cause and
                create a noteworthy project for my portfolio! You can contact me via{' '}
                <a href="https://github.com/alyona-shirpal" target="_blank" rel="noreferrer">
                    GitHub
                </a>{' '}
                to see more of my projects and contributions to the community.{' '}
            </p>
        </div>

        <div className={styles.aboutImage}>
            <img src={aboutImage} alt="about" />
        </div>
    </div>
);
