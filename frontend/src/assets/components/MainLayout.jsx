import barca from "../images/barca-jersey.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

const MainLayout = () => {
    return (
        <div className="flex flex-col items-center text-[#1D3557] py-16 px-8">
            {/* Title Section */}
            <h1 className="text-4xl mb-2 text-center ">
                Get<span className="font-semibold text-[#E63946]"> YOUR </span>
                jersey
            </h1>
            <p className="text-gray-500 mb-8 text-lg text-center">
                No complicated user settings. No app. No Bluetooth. Simply press
                and restore.
            </p>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
                {/* Left Text Block */}
                <div className="flex-1 text-center">
                    <div className="flex flex-col items-center mb-8">
                        <GppGoodOutlinedIcon style={{ fontSize: 48 }} />
                        <p className="text-gray-500 mt-4">
                            Discover our authentic, high-quality jerseys,
                            designed to reflect your favorite teams and eras.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <ThumbUpOffAltOutlinedIcon style={{ fontSize: 48 }} />
                        <p className="text-gray-500 mt-4">
                            Our clients provided an excellent and highly valued
                            recommendation.
                        </p>
                    </div>
                </div>

                {/* Image Section with Button */}
                <div className="flex-1 flex flex-col items-center">
                    <img
                        src={barca}
                        alt="Barcelona Jersey"
                        className="w-64 h-64 object-contain mb-8"
                    />
                    <button className="px-6 py-2 mb-4 bg-gradient-to-r from-[#c53944] to-[#457B9D] text-white rounded-full cursor-pointer shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        Buy now
                    </button>
                </div>

                {/* Right Text Block */}
                <div className="flex-1 text-center md:pl-8">
                    <div className="flex flex-col items-center mb-8">
                        <BoltOutlinedIcon style={{ fontSize: 48 }} />
                        <p className="text-gray-500 mt-4">
                            Quick and reliable delivery service available
                            worldwide no matter where you are.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <HandshakeOutlinedIcon style={{ fontSize: 48 }} />
                        <p className="text-gray-500 mt-4">
                            Unique pulse trains and emitter sequencing
                            algorithms yield a whole brain stimulation that is
                            rapid and efficient.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
