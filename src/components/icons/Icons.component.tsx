import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

interface SocialIconProps {
    iconName: string;
    iconUrl: string;
}

interface IconMapping {
    [key: string]: string;
}

const AVAILABLE_ICON_MAPPING: IconMapping = {
    facebook,
    instagram,
    linkedin,
};

export const IconsComponent: React.FC<SocialIconProps> = ({ iconName, iconUrl }) => {
    const source = AVAILABLE_ICON_MAPPING[iconName];
    const altText = iconName.toUpperCase();

    return (
        <a href={iconUrl} target="_blank" rel="noreferrer">
            {' '}
            <img src={source} alt={altText} />{' '}
        </a>
    );
};
