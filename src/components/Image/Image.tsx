import type { ComponentProps } from 'react';

const Image = ({ onClick, src, alt, className, ...restProps }: ComponentProps<'img'>) => (
    <img onClick={onClick} src={src} alt={alt} className={`default-image ${className}`} {...restProps} />
);

export default Image;
