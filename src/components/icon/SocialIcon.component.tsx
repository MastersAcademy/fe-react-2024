import React from 'react';

import FacebookIconSVG from '@/assets/icons/socials/facebook.svg?react';
import InstagramIconSVG from '@/assets/icons/socials/instagram.svg?react';
import LinkedinIconSVG from '@/assets/icons/socials/linkedin.svg?react';

export enum SocialIconName {
    FACEBOOK = 'facebook',
    INSTAGRAM = 'instagram',
    LINKEDIN = 'linkedin',
}

interface SocialIconProps {
    iconName: SocialIconName;
    url: string;
    title?: string;
}

function getIcon(iconName: SocialIconName, title?: string) {
    const iconTitle = title || `${iconName} logo`;

    switch (iconName) {
        case 'facebook': {
            return <FacebookIconSVG title={iconTitle} />;
        }
        case 'instagram': {
            return <InstagramIconSVG title={iconTitle} />;
        }
        case 'linkedin': {
            return <LinkedinIconSVG title={iconTitle} />;
        }
        default: {
            return null;
        }
    }
}

export const SocialIconComponent: React.FC<SocialIconProps> = ({ iconName, url, title }) => (
    <a href={url} target="_blank" rel="noreferrer">
        {getIcon(iconName, title)}
    </a>
);
