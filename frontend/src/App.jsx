import "./App.css";
// import MainPage from "./assets/components/MainPage";
import MainLayout from "./assets/components/MainLayout";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/components/Main";
// import CardComp from "./assets/components/CardComp";

function App() {
    return (
        <>
            <Navbar />
            <Main />
            {/* <CardComp /> */}
            {/* <MainPage /> */}
            <MainLayout />
        </>
    );
}

export default App;
