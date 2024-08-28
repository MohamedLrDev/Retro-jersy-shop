import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-[25vh] bg-[#374151]">
      <div className="text-white" >
        <a href="#">Logo</a>
      </div>
      <ul className="flex space-x-8 text-white  text-[16px]">
        <li>
          <div className="group relative">
            <a
              href="#"
              className="relative transition-colors hover:text-gray-300"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-300 origin-left"></span>
            </a>
          </div>
        </li>
        <li>
          <div className="group relative">
            <a
              href="#"
              className="relative transition-colors hover:text-gray-300"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-300 origin-left"></span>
            </a>
          </div>
        </li>
        <li>
          <div className="group relative">
            <a
              href="#"
              className="relative transition-colors hover:text-gray-300"
            >
              Produits
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-300 origin-left"></span>
            </a>
          </div>
        </li>
        <li>
          <div className="group relative">
            <a
              href="#"
              className="relative transition-colors hover:text-gray-300"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-300 origin-left"></span>
            </a>
          </div>
        </li>
      </ul>
      <div className="flex items-center text-white space-x-6">
        <SearchIcon className="cursor-pointer hover:text-gray-300" />
        <ShoppingCartIcon className="cursor-pointer hover:text-gray-300" />
        <AccountCircleIcon className="cursor-pointer hover:text-gray-300" />
      </div>
    </nav>
  );
};

export default Navbar;
