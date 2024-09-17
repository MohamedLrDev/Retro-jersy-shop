// import jeresy from "../images/jersey-3d.png"
// // import jeresyTwo from '../images/two-barca-jersey-3d.png'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

// const MainPage = () => {
//     return (
//         <div className="flex justify-between text-[#2A2A42] items-center mt-[70px] px-[12vh] bg-[#F7DF95]">
//             <div className="max-w-lg ">
//                 <p className="text-[#FF6347] text-sm mb-2">HEADER</p>
//                 <h1 className="text-5xl font-bold mb-4">
//                     GET YOUR <br /> JERESY NOW
//                 </h1>
//                 <p className="text-gray-600 mb-6">
//                     High Quality Retro Jeresey With A Great Price
//                 </p>
//                 <div className="flex space-x-4 font-semibold">
//                     <button className="flex w-[150px] items-center border-2 border-[#FF6347] text-[#FF6347] pl-5 py-2 rounded-full transition">
//                         SHOP NOW
//                         <FontAwesomeIcon
//                             icon={faArrowRight}
//                             className="ml-2"
//                             style={{ transform: "rotate(-40deg)" }}
//                         />
//                     </button>

//                     <button className="flex items-center text-gray-600 px-4 py-2 transition hover:text-gray-400">
//                         <FontAwesomeIcon icon={faCirclePlay} className="mr-2" />
//                         WATCH THE VIDEO
//                     </button>
//                 </div>
//             </div>
//             <div className="pt-5">
//                 <img
//                     src={jeresy}
//                     alt="Jeresy 3d"
//                     className="w-[600px] max-w-lg"
//                 />

//             </div>
//         </div>
//     );
// };

// export default MainPage;

import jeresy from "../images/jersey-3d.png";
import { ArrowRight, Play } from "lucide-react";

export default function MainPage() {
    return (
        <div className="flex flex-col w-full h-fit md:flex-row justify-between text-[#2A2A42] items-center mt-[70px] px-4 md:px-[12vh] bg-[#F7DF95] min-h-screen">
            <div className="max-w-lg w-full md:w-1/2 text-center pt-6 md:text-left mb-8 md:mb-0">
                <p className="text-[#FF6347] text-sm mb-2">HEADER</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    GET YOUR <br className="hidden md:inline" /> JERSEY NOW
                </h1>
                <p className="text-gray-600 mb-6">
                    High Quality Retro Jersey With A Great Price
                </p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 font-semibold items-center md:items-start">
                    <button className="flex w-[150px] items-center justify-center border-2 border-[#FF6347] text-[#FF6347] py-2 rounded-full transition hover:bg-[#FF6347] hover:text-white">
                        SHOP NOW
                        <ArrowRight
                            className="ml-2 transform rotate-[-40deg]"
                            size={16}
                        />
                    </button>

                    <button className="flex items-center text-gray-600 px-4 py-2 transition hover:text-gray-400">
                        <Play className="mr-2" size={16} />
                        WATCH THE VIDEO
                    </button>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img
                    src={jeresy}
                    alt="Jersey 3D"
                    className="w-full max-w-[300px] md:max-w-[600px]"
                />
            </div>
        </div>
    );
}
