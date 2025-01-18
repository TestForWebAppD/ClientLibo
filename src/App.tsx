import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./approuter/approuter";

function App() {

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <main
                className="container w-full h-auto min-h-space-screen relative top-[130px] z-1 mb-[220px] flex justify-center flex-col">
                <AppRouter/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
