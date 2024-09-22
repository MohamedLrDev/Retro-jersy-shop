import Slider from 'react-slick';
import CardComp from './CardComp';
import { SampleNextArrow, SamplePrevArrow } from '../UI/Arrows';

const Teams = () => {

    const settings = {
        dots: true, // Enable dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
          {
            breakpoint: 1280, // Extra large screens
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024, // Large screens (e.g., laptops)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // Medium screens (e.g., tablets)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const cards = [
        { imageSrc: "https://placehold.co/300x300", title: "Team 1", description: "Check last arrivals!" },
        { imageSrc: "https://placehold.co/300x300", title: "Team 2", description: "Explore new additions!" },
        { imageSrc: "https://placehold.co/300x300", title: "Team 3", description: "Discover our collection!" },
        { imageSrc: "https://placehold.co/300x300", title: "Team 4", description: "See what's new!" },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <CardComp key={index} {...card} />
                ))}
            </Slider>
        </div>
    );
};

export default Teams;
