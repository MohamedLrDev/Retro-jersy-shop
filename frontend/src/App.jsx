import "./App.css";
import MainPage from "./assets/components/MainPage";
import MainLayout from "./assets/components/MainLayout";
import Navbar from "./assets/components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <MainPage />
            <MainLayout />
        </>
    );
}

export default App;
