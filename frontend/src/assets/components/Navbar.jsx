import { useState } from 'react'
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0  left-0 bg-[#F7F7F7] w-full h-[70px] flex items-center justify-between py-4 shadow-md px-4 lg:px-[15vh] bg-[#] z-50">
      <div className="text-[#1D3557]">
        <a href="#">Logo</a>
      </div>
      
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-[#1D3557]">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      
      <ul className={`flex-col lg:flex-row lg:flex absolute lg:relative top-[70px] lg:top-0 left-0 w-full lg:w-auto  lg:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex shadow-md' : 'hidden'} lg:space-x-8 text-lg text-[#1D3557] bg-[#F7F7F7] p-4 lg:p-0`}>
        {['Home', 'Teams', 'About Us', 'Contact'].map((item) => (
          <li key={item}>
            <div className="group relative">
              
              <a href="#" className="relative transition-colors py-1 inline-block">
                {item}
                
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6347] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="hidden lg:flex items-center text-[#1D3557] space-x-6">
        <Search className="cursor-pointer hover:text-gray-400" />
        <ShoppingCart className="cursor-pointer hover:text-gray-400" />
        <User className="cursor-pointer hover:text-gray-400" />
      </div>
    </nav>
  )
}
