import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Main from "../../components/common/Main";
import Teams from "../../components/common/Teams";
import MainLayout from "../../components/common/MainLayout";
import NewArrivalsComp from "../../components/common/NewArrivalsComp";
import Templates from "../../components/common/Tempaltes";
import Footer from "../../components/layout/Footer";


const Home = () => {

  const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            setShowNavbar(false);
        } else {
            // Scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
        };
    }, [lastScrollY]);

  return (
    <>
      <div
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
                    showNavbar
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-full"
                }`}
            >
                <Navbar />
            </div>
            <Main />
            <Teams />
            <MainLayout />
            <NewArrivalsComp />
            <Templates />
            <Footer />
    </>
  )
}

export default Home