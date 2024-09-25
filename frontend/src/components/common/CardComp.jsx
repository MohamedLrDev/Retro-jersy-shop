const CardComp = ({ imageSrc, title, description }) => {
    return (
        <div className="card glass text-[#1D3557] md:max-2xl:mx-auto mx-4 max-w-sm md:max-w-md md:px-2 lg:max-w-lg xl:max-w-xl pt-4 my-6  md:mx-2 lg:mx-8 ">
            <figure>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-auto object-cover px-3"
                />
            </figure>
            <div className="card-body  dark:text-[#f7f7f7]">
                <h2 className="card-title text-lg md:text-xl lg:text-base">{title}</h2>
                <p className="text-sm md:text-base lg:text-base line-clamp-1">{description}</p>
            </div>
        </div>
    );
};

export default CardComp;
