import jeresy from "../images/jersey-3d.png"
// import jeresyTwo from '../images/two-barca-jersey-3d.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
    return (
        <div className="flex justify-between text-[#2A2A42] items-center mt-[70px] px-[12vh] bg-[#F7DF95]">
            <div className="max-w-lg ">
                <p className="text-[#FF6347] text-sm mb-2">HEADER</p>
                <h1 className="text-5xl font-bold mb-4">
                    GET YOUR <br /> JERESY NOW
                </h1>
                <p className="text-gray-600 mb-6">
                    High Quality Retro Jeresey With A Great Price
                </p>
                <div className="flex space-x-4 font-semibold">
                    <button className="flex w-[150px] items-center border-2 border-[#FF6347] text-[#FF6347] pl-5 py-2 rounded-full transition">
                        SHOP NOW
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="ml-2"
                            style={{ transform: "rotate(-40deg)" }}
                        />
                    </button>

                    <button className="flex items-center text-gray-600 px-4 py-2 transition hover:text-gray-400">
                        <FontAwesomeIcon icon={faCirclePlay} className="mr-2" />
                        WATCH THE VIDEO
                    </button>
                </div>
            </div>
            <div className="pt-5">
                <img
                    src={jeresy}
                    alt="Jeresy 3d"
                    className="w-[600px] max-w-lg"
                />
            </div>
        </div>
    );
};

export default MainPage;
