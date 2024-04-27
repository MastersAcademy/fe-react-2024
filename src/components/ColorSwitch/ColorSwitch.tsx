import React from 'react';

import DividerIcon from '@assets/divider.svg?react';
import MoonIcon from '@assets/moon.svg?react';
import SunIcon from '@assets/sun.svg?react';

import styles from './colorswitch.module.css';

interface ColorSwitchProps {
    className?: string;
}

const ColorSwitch: React.FC<ColorSwitchProps> = ({ className, ...restProps }) => (
    <div className={`${styles.colorSwitch} ${className}`} {...restProps}>
        <SunIcon className="headerSun" />
        <DividerIcon className="headerDivider" />
        <MoonIcon className="headerMoon" />
    </div>
);

export { ColorSwitch };
