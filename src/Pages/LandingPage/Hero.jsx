import SignInPage from "./SignInPage";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Hero() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <>
            <section id="Hero">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="pt-7">
                        <div className="flex justify-between items-center text-white">
                            <div className="flex items-center">
                                <img
                                    src="assets/img/logo.png"
                                    alt="Logo"
                                    className="h-10"
                                />
                                <span className="text-white text-2xl font-bold ml-2">
                                    BrainHub
                                </span>
                            </div>
                            <div className="hidden md:flex space-x-8 items-center">
                                <a href="#" className="hover:text-gray-300">
                                    Explora
                                </a>
                                <span className="text-gray-400">·</span>
                                <a href="#" className="hover:text-gray-300">
                                    Publicar Evento
                                </a>
                                <span className="text-gray-400">·</span>
                                <a href="#" className="hover:text-gray-300">
                                    Comunidad
                                </a>
                                <span className="text-gray-400">·</span>

                                <a href="#" className="hover:text-gray-300">
                                    FAQ
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-4">
                                <button
                                    onClick={handleLoginRedirect}
                                    className="group relative rounded-full p-px text-sm/6 text-white duration-300 hover:text-zinc-100 hover:shadow-glow font-semibold border border-gray-500 hover:scale-110 hover:transition-transform cursor-pointer"
                                    type="button"
                                >
                                    <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                                        Unete a BrainHub
                                    </div>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-indigo-400/90 to-pink-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                </button>
                            </div>
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-white focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d={
                                                isMenuOpen
                                                    ? "M6 18L18 6M6 6l12 12"
                                                    : "M4 6h16M4 12h16m-7 6h7"
                                            }
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {isMenuOpen && (
                            <div className="md:hidden mt-4">
                                <div className="flex flex-col space-y-4 text-white items-center">
                                    <a href="#" className="hover:text-gray-300">
                                        Explora
                                    </a>
                                    <a href="#" className="hover:text-gray-300">
                                        Publicar Evento
                                    </a>
                                    <a href="#" className="hover:text-gray-300">
                                        Comunidad
                                    </a>
                                    <a href="#" className="hover:text-gray-300">
                                        FAQ
                                    </a>
                                    <button
                                        onClick={handleLoginRedirect}
                                        className="group relative rounded-full p-px text-sm/6 text-white duration-300 hover:text-zinc-100 hover:shadow-glow font-semibold border border-gray-500 hover:scale-110 hover:transition-transform cursor-pointer"
                                        type="button"
                                    >
                                        <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                                            Unete a BrainHub
                                        </div>
                                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-indigo-400/90 to-pink-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </nav>
                    <div className="flex flex-col md:flex-row justify-between items-center text-white mt-20 md:mt-30 mb-10">
                        <div className="text-7xl text-center md:text-left">
                            <h1>Conecta.</h1>
                            <h1>Crea.</h1>
                            <h1>Crece.</h1>
                        </div>
                        <div className="flex flex-1 flex-row items-end justify-between mt-8 md:mt-0">
                            <div className="flex-1 flex justify-center pr-0 md:pr-40">
                                <span className="text-4xl text-white text-center">
                                    /
                                </span>
                            </div>
                            <button className="bg-white py-2 px-4 rounded-full text-black font-semibold flex items-center gap-2 ml-0 md:ml-8">
                                Work
                                <span className="text-black text-lg">
                                    &#8594;
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute m-auto blur-[300px] max-w-3xl h-[250px] -top-70 inset-0 sm:h-[100px] lg:h-[350px]"
                    style={{
                        background:
                            "linear-gradient(180deg, #7C3AED 0%, rgb(91 0 255 / 98%) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
                    }}
                ></div>
                <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 relative">
                    <img
                        src="assets/img/hero.png"
                        alt="Hero"
                        className="w-full h-auto max-h-[570px] object-cover"
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;
