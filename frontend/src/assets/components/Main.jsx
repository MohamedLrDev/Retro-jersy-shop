import { useState, useEffect } from "react";

const Main = () => {
  const images = [
    "https://via.placeholder.com/1200x800.png?text=Retro+Jersey+1",
    "https://via.placeholder.com/1200x800.png?text=Retro+Jersey+2",
    "https://via.placeholder.com/1200x800.png?text=Retro+Jersey+3",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gray-200 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)),url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 space-y-8 md:px-10">
        <h1 className="text-5xl uppercase font-bold px-12">
          Discover Classic{" "}
          <span className="bg-gradient-to-r from-[#FF6347] to-[#FF4500] text-transparent bg-clip-text">
            Retro Jerseys
          </span>
        </h1>
        <p className="text-lg md:text-2xl">
          Relive the glory days with our collection of iconic jerseys from the past.
        </p>
        <div className="flex space-x-4">
            <div className="px-4 py-2 bg-[#FF6347] hover:bg-[#d8523b] text-white rounded cursor-pointer">
            Shop Now
          </div>
          <div className="px-4 py-2 bg-neutral-200 hover:bg-neutral-400 text-neutral-900 rounded cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <div
          className="text-white text-xl cursor-pointer"
          onClick={handlePrev}
        >
          &#10094;
        </div>
      </div>
      <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
        <div
          className="text-white text-xl cursor-pointer"
          onClick={handleNext}
        >
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default Main;
