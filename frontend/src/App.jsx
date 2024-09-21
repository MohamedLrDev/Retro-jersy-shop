import "./App.css";
import MainLayout from "./assets/components/MainLayout";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/components/Main";
import Teams from "./assets/components/Teams";
import NewArrivalsComp from "./assets/components/NewArrivalsComp";
import Footer from "./assets/components/Footer";
import { useState, useEffect } from "react";
import Tempaltes from "./assets/components/Tempaltes";

function App() {
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
            <Tempaltes />
            <Footer />
        </>
    );
}

export default App;
