import React from 'react';

interface FooterInfoProps {
    name: string;
}

export const FooterInfoComponent: React.FC<FooterInfoProps> = ({ name }) => (
    <p>
        Made with 💗 on course
        <a href="https://www.mastersacademy.education/frontend-for-beginners-it" target="_blank" rel="noreferrer">
            &apos;Intro to React&apos; from Masters Academy in 2024
        </a>
        , by {name}
    </p>
);
