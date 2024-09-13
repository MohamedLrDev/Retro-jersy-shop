import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-[70px] flex text-[17px] items-center justify-between py-4 px-[25vh] bg-[#2A2A42] z-50">
            <div className="text-[#F5F5F5]">
                <a href="#">Logo</a>
            </div>
            <ul className="flex space-x-8 text-[#FF6347] ">
                <li>
                    <div className="group relative">
                        <a href="#" className="relative transition-colors py-1 ">
                            Accueil
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-[#FF6347] origin-left"></span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="group relative">
                        <a href="#" className="relative transition-colors py-1">
                            À propos
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-[#FF6347] origin-left"></span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="group relative">
                        <a href="#" className="relative transition-colors py-1">
                            Produits
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-[#FF6347] origin-left"></span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="group relative">
                        <a href="#" className="relative transition-colors py-1">
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-[#FF6347] origin-left"></span>
                        </a>
                    </div>
                </li>
            </ul>
            <div className="flex items-center text-[#F5F5F5] space-x-6">
                <SearchIcon className="cursor-pointer hover:text-gray-400 " />
                <ShoppingCartIcon className="cursor-pointer  hover:text-gray-400" />
                <AccountCircleIcon className="cursor-pointer  hover:text-gray-400" />
            </div>
        </nav>
    );
};

export default Navbar;
3;
