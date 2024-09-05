import "./App.css";
import Categories from "./assets/components/Teams";

import Main from "./assets/components/Main";
import MainLayout from "./assets/components/MainLayout";
import Navbar from "./assets/components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Main />
            <Categories />
            <MainLayout />
        </>
    );
}

export default App;
