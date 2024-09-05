import barcaLogo from '../images/barca-logo.png'; // Make sure you have the logo image in your project

const Card = () => {
  return (
    <a href="/your-link" className="block max-w-sm mx-auto relative w-[250px] h-[250px] bg-gray-700 rounded-md shadow-md overflow-hidden group">
      <img src={barcaLogo} alt="barca-logo" className="w-full h-full object-cover p-2 " />
      <div className="absolute inset-0 flex flex-col justify-end transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 ">
        <span className="w-full text-center bg-[#FF6347] text-white p-2 font-semibold">
          Barcelona
        </span>
      </div>
    </a>
  );
};

export default Card;
