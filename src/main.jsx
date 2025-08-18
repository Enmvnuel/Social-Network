import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./Hero.jsx";
import Logos from "./Logos.jsx";
import Information from "./Information.jsx";
import Testimonial from "./Testimonial.jsx";
import JoinWailtlist from "./JoinWaitlist.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Hero />
        <Logos />
        <Information />
        <Testimonial />
        <JoinWailtlist />
        <Footer />
    </StrictMode>
);
