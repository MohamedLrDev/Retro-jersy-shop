const CardComp = ({ imageSrc, title, description }) => {
    return (
        <div className="card glass px-4 text-[#1D3557] max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl pt-4 my-6 mx-auto md:mx-6 lg:mx-8">
            <figure>
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-auto object-cover"
                />
            </figure>
            <div className="card-body ml-2">
                <h2 className="card-title text-lg md:text-xl lg:text-2xl">{title}</h2>
                <p className="text-sm md:text-base lg:text-lg">{description}</p>
            </div>
        </div>
    );
};

export default CardComp;
