interface LinkProps {
    href: string;
    target: string;
    rel: string;
    children: React.ReactNode;
    className?: string;
}

const Link = ({ href, target, rel, children, className }: LinkProps) => (
    <a href={href} target={target} rel={rel} className={`default-link ${className}`}>
        {children}
    </a>
);

export default Link;
