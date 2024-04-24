import React from 'react';

import { AboutMeImageComponent } from './AboutMeImage.component.tsx';
import { AboutMeTextComponent } from './AboutMeText.component.tsx';

import styles from './about-me.module.css';

interface AboutMeProps {
    name: string;
    nikName: string;
}

export const AboutMeComponent: React.FC<AboutMeProps> = ({ name, nikName }) => (
    <div className={styles.aboutMe}>
        <div className={styles.aboutMeColumn}>
            <AboutMeTextComponent name={name} nikName={nikName} />
        </div>
        <div className={styles.aboutMeColumn}>
            <div className={styles.aboutMeImgContainer}>
                <AboutMeImageComponent />
            </div>
        </div>
    </div>
);
