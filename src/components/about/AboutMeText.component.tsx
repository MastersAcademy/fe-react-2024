import React from 'react';

interface AboutMeTextProps {
    name: string;
    nikName: string;
}

export const AboutMeTextComponent: React.FC<AboutMeTextProps> = ({ name, nikName }) => (
    <>
        <h1>About me</h1>
        <div>
            <p>
                Hi! My name is {name} and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies like React,
                HTML, CSS, JavaScript and Git version control system.
            </p>
            <p>This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.</p>
            <p>
                This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                small project for the portfolio.
            </p>
            <p>
                You can contact me via {nikName} and check out my{' '}
                <a href={`https://github.com/${nikName}`} target="_blank" rel="noreferrer">
                    GitHub
                </a>
                .
            </p>
        </div>
    </>
);
