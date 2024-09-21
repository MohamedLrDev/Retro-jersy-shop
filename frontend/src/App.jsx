import "./App.css";
// import MainPage from "./assets/components/MainPage";
import MainLayout from "./assets/components/MainLayout";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/components/Main";
import CardComp from "./assets/components/CardComp";
import Teams from "./assets/components/Teams";
import NewArrivalsComp from "./assets/components/NewArrivalsComp";

function App() {
    return (
        <>
            <Navbar />
            <Main />
            {/* <CardComp /> */}
            <Teams />
            {/* <MainPage /> */}
            <MainLayout />
            <NewArrivalsComp />
        </>
    );
}

export default App;
