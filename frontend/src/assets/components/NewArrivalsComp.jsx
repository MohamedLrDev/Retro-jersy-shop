import { useState, useEffect } from "react";
import Item from "./Item";
import ac_milan_jersey from "../images/jerseys/ac-milan-jersey.png";
// import bayern_jersey from "../images/jerseys/bayern-jersey.png";

const NewArrivalsComp = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640); // 640px is the 'sm' breakpoint in Tailwind
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    const data = [
        {
            image: ac_milan_jersey,
            title: "AC Milan 13/14 Home",
            price: "109.95$",
        },
        // Repeat the object as needed for other items
        {
            image: ac_milan_jersey,
            title: "AC Milan 13/14 Home",
            price: "109.95$",
        },
        {
            image: ac_milan_jersey,
            title: "AC Milan 13/14 Home",
            price: "109.95$",
        },
        // Repeat the object as needed for other items
        {
            image: ac_milan_jersey,
            title: "AC Milan 13/14 Home",
            price: "109.95$",
        },
        {
            image: ac_milan_jersey,
            title: "AC Milan 13/14 Home",
            price: "109.95$",
        },
        // Repeat the object as needed for other items
        {
            image: ac_milan_jersey,
            title: "AC Milan 13/14 Home",
            price: "109.95$",
        },
       
        // ... Add more items here
    ];

    const displayedData = isSmallScreen ? data.slice(0, 2) : data;

    return (
        <div className="container mx-auto  py-8">
            <h2 className="text-center text-[#1D3557] text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
                Check Our <span className="text-[#E63946]">New</span> Arrivals<span className="text-[#E63946]">!</span>
            </h2>
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {displayedData.map((item, index) => (
                    <Item
                        key={index}
                        imageSrc={item.image}
                        productName={item.title}
                        price={item.price}
                    />
                ))}
            </div>
            {isSmallScreen && (
                <div className="mt-6 text-center">
                    <button className="bg-[#1D3557] text-white px-4 py-2 rounded-md hover:bg-[#2A4A6D] transition-colors">
                        View All
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewArrivalsComp;
