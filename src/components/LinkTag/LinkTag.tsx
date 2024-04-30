import type { ComponentProps } from 'react';

interface AGroup extends ComponentProps<'a'> {
    href: string;
    className: string;
}
export const LinkTag = ({ href, className }: AGroup) => (
    <a href={href} className={className}>
        {` `}
    </a>
);
