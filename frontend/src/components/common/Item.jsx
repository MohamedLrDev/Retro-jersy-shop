const Item = ({ imageSrc, productName, price }) => {
    return (
        <div className="w-full max-w-[18rem] aspect-square relative mx-auto">
      {/* Gray circular background */}
      <div className="absolute inset-0 bg-[#A8DADC] rounded-full overflow-hidden">
        {/* Product image */}
        <div className="absolute inset-[10%] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={productName}
          />
        </div>
      </div>
      
      {/* Product name - top left */}
      <div className="absolute top-1.5 left-4 text-left max-w-[70%]">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#1D3557] line-clamp-2">{productName}</h3>
      </div>
      
      {/* Price tag - bottom right */}
      <div className="absolute bottom-4 right-0 text-right">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#E63946]">{price}</p>
      </div>
    </div>
    );
};

export default Item;
