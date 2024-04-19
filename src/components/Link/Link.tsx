const Link = ({
    href,
    target,
    rel,
    children,
    className,
}: {
    href: string;
    target: string;
    rel: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <a href={href} target={target} rel={rel} className={`default-link ${className}`}>
        {children}
    </a>
);

export default Link;
