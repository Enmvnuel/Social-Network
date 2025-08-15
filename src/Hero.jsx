import { useState } from "react";
import "./App.css";

function Hero() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="px-55">
                <nav className="mt-7">
                    <div className="flex justify-between items-center text-white">
                        <div className="mr-4 flex">
                            <img
                                src="assets/img/logo.png"
                                alt="Logo"
                                className="h-10"
                            />
                            <span className="text-white text-2xl font-bold">
                                BrainHub
                            </span>
                        </div>
                        <div className="flex space-x-8 items-center">
                            <a href="#" className="hover:text-gray-300">
                                Discover
                            </a>
                            <span className="text-gray-400">·</span>
                            <a href="#" className="hover:text-gray-300">
                                Create Event
                            </a>
                            <span className="text-gray-400">·</span>
                            <a href="#" className="hover:text-gray-300">
                                Developers
                            </a>
                        </div>
                        <div className="space-x-8">
                            <a href="#" className="hover:text-gray-300">
                                FAQ
                            </a>
                            <button className="py-2 px-4 rounded-full text-white  font-semibold border border-gray-500">
                                <a href="#">Get Started</a>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="flex flex-row justify-between items-end text-white mt-30 mb-10">
                    <div className="text-7xl">
                        <h1>Plan.</h1>
                        <h1>Manage.</h1>
                        <h1>Build.</h1>
                    </div>
                    <div className="flex flex-1 flex-row items-end justify-between ">
                        <div className="flex-1 flex justify-center pr-40">
                            <span className="text-4xl text-white text-center">
                                /
                            </span>
                        </div>
                        <button className="bg-white py-2 px-4 rounded-full text-black font-semibold flex items-center gap-2 ml-8">
                            Work
                            <span className="text-black text-lg">&#8594;</span>
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
            <div className="w-full px-10 relative">
                <img
                    src="assets/img/hero.png"
                    alt=""
                    className="w-full h-146 rounded-tr-3xl"
                />
            </div>
        </>
    );
}

export default Hero;
