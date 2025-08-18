import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./Hero.jsx";
import Logos from "./Logos.jsx";
import FeedEventos from "./FeedEventos.jsx";
import Testimonial from "./Testimonial.jsx";
import JoinWailtlist from "./JoinWaitlist.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Hero />
        <Logos />
        <FeedEventos />
        <Testimonial />
        <JoinWailtlist />
        <Footer />
    </StrictMode>
);
