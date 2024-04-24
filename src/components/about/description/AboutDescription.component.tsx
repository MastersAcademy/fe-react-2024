import { TitleComponent } from '@/components/common/title/Title.component.tsx';

import styles from './AboutDescription.module.css';

export const AboutDescriptionComponent = () => (
    <div className={styles.box}>
        <TitleComponent titleClasses={styles.aboutDescriptionTitle}>About me</TitleComponent>
        <p>
            Hi! My name is [Name] and I&aposm a Junior Frontend Developer. I am already familiar with main Web Technologies like React,
            HTML, CSS, JavaScript and Git version control system.
        </p>
        <p>This page was developed during the course &aposIntro to React&apos from Masters Academy in 2024.</p>
        <p>
            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own small
            project for the portfolio.
        </p>
        <p>You can contact me via [social network name] and check out my GitHub.</p>
    </div>
);
