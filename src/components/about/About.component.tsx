import { TitleComponent } from '../title/Title.component';

// @ts-ignore
export const AboutComponent = ({ customClasses }) => (
    <div className={customClasses}>
        <TitleComponent>About me</TitleComponent>
        <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi! My name is [Name] and I'm a Junior Frontend Developer. I am already familiar with main Web Technologies like React, HTML,
            CSS, JavaScript and Git version control system.
        </p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>This page was developed during the course 'Intro to React' from Masters Academy in 2024.</p>
        <p>
            This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own small
            project for the portfolio.
        </p>
        <p>You can contact me via [social network name] and check out my GitHub.</p>
    </div>
);
