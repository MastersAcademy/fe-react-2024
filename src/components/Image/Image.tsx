interface ImageProps {
    onClick?: () => void;
    src: string;
    alt: string;
    className?: string;
}

const Image = ({ onClick, src, alt, className }: ImageProps) => (
    <img onClick={onClick} src={src} alt={alt} className={`default-image ${className}`} />
);

export default Image;
