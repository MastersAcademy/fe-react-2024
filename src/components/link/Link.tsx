interface LinkProps {
    href: string;
    className: string;
    children: React.ReactNode;
}

const Link = ({ href, className, children }: LinkProps) => (
    <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
    </a>
);

export default Link;
