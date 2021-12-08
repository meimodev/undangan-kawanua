/* eslint-disable @next/next/no-img-element */
const Photo = ({link, alt, useDiv}) => {
    if (useDiv) {
        return (
            <div
                className="h-full w-full bg-cover"
                style={{backgroundImage: `url(${link})`}}
            />
        );
    }

    return (
        <div>
            <img src={link} alt={alt}/>
        </div>
    );
};
export default Photo;
