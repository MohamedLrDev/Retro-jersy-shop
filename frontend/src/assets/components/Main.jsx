import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import jersey from "../images/two-barca-jersey-3d.png";
import jersey2 from "../images/real-madrid-home-jersey.png";
import jersey3 from "../images/liverpool-2023-home-jersey.png";

export default function Main() {
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
        cssEase: "linear",
    };
    const items = [
        {
            image:  jersey ,
            title: "Barcelona jersey",
        },
        {
            image:  jersey2 ,
            title: "Real Madrid jersey",
        },
        {
            image:  jersey3 ,
            title: "Liverpool jersey",
        },
    ];

    return (
        <div className="mt-20 text-[#1D3557]">
            <div className="flex flex-col justify-center items-center w-full text-transform: capitalize">
                <h1 className="text-9xl flex items-center">
                    Express
                    <span className="inline-block w-20 h-2 bg-[#E63946] mx-4"></span>
                    love
                </h1>
                <p className="mt-4 text-9xl">
                    to your team{" "}
                    <span className="inline-block w-5 h-5 bg-[#E63946]"></span>
                </p>
            </div>
            <div className="flex justify-center mt-10">
                <div className="max-w-3xl w-full">
                    <Slider {...settings}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full pointer-events-none"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    );
}
