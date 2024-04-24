export const ImageComponent = ({ imgSrc, imgAlt, imgWrapClasses, imgClasses }) => (
    <div className={imgWrapClasses}>
        <img className={imgClasses} src={imgSrc} alt={imgAlt} />
    </div>
);
