import { Routes, Route } from "react-router-dom";
import { SignedIn, SignIn } from "@clerk/clerk-react";

import Home from "./Pages/Home.jsx";

import Dashboard from "./Pages/Dashboard.jsx";
function App() {
    return (
        <>
            <Home />
        </>
    );
}

export default App;
