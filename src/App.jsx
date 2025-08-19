import { Routes, Route } from "react-router-dom";
import { SignedIn, SignIn } from "@clerk/clerk-react";

import Home from "./Pages/Home.jsx";
import Hero from "./Pages/LandingPage/Hero.jsx";
import Logos from "./Pages/LandingPage/Logos.jsx";
import FeedEventos from "./Pages/LandingPage/FeedEventos.jsx";
import Testimonial from "./Pages/LandingPage/Testimonial.jsx";
import JoinWailtlist from "./Pages/LandingPage/JoinWailtlist.jsx";
import Footer from "./Pages/LandingPage/Footer.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
function App() {
    return (
        <>
            {/* <Hero /> */}
            {/* <Logos />
            <FeedEventos />
            <Testimonial />
            <JoinWailtlist /> */}
            <Footer />
        </>
    );
}

export default App;
