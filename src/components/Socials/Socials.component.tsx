import React from 'react';

import { Icon } from '@/ui/SocialIcon/SocialIcon';

import INIcon from '../../../src/assets/footer/insta.svg';
import LNIcon from '../../../src/assets/footer/linkedin.svg';
import FBIcon from '../../../src/assets/footer/Vector.svg';

import styles from './socials.module.css';

export function Socials({ className, ...restProps }: React.ComponentProps<'ul'>) {
    return (
        <ul className={styles.wrap_icon} {...restProps}>
            <Icon href="https://www.facebook.com/">
                <img src={FBIcon} alt="FB" />
            </Icon>
            <Icon href="https://www.linkedin.com/">
                <img src={LNIcon} alt="LI" />
            </Icon>
            <Icon href="https://www.instagram.com/">
                <img src={INIcon} alt="In" />
            </Icon>
        </ul>
    );
}
