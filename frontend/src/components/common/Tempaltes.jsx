import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Templates = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <div className="w-full m-0 h-auto">
            <Slider {...settings}>
                <div className="w-full h-full">
                    <img
                        src="https://placehold.co/600x150"
                        className="w-full h-full object-cover"
                        alt="slide-1"
                    />
                </div>
                <div className="w-full h-full">
                    <img
                        src="https://placehold.co/600x150"
                        className="w-full h-full object-cover"
                        alt="slide-2"
                    />
                </div>
                <div className="w-full h-full">
                    <img
                        src="https://placehold.co/600x150"
                        className="w-full h-full object-cover"
                        alt="slide-3"
                    />
                </div>
                <div className="w-full h-full">
                    <img
                        src="https://placehold.co/600x150"
                        className="w-full h-full object-cover"
                        alt="slide-4"
                    />
                </div>
                <div className="w-full h-full">
                    <img
                        src="https://placehold.co/600x150"
                        className="w-full h-full object-cover"
                        alt="slide-5"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Templates;
