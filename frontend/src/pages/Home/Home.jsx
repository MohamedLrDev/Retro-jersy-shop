import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Main from "../../components/common/Main";
import MainLayout from "../../components/common/MainLayout";
import NewArrivalsComp from "../../components/common/NewArrivalsComp";
import Footer from "../../components/layout/Footer";
import Reviews from "../../components/common/Reviews";
import CardSlider from "../../components/common/CardSlider";

const Home = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode); // Toggle the 'dark' class on the HTML element
    };

    return (
        <div>
            <div
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
                    showNavbar
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-full"
                }`}
            >
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>
            <Main />
            <CardSlider />
            <MainLayout />
            <NewArrivalsComp />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;
