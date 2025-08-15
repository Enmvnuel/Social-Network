import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./Hero.jsx";
import Logos from "./Logos.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Hero />
        <Logos />
    </StrictMode>
);
