import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <nav className="mt-1">
                <div className="flex justify-between items-center text-white p-4">
                    <div className="text-xl font-bold pl-4">Social Network</div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-300">
                            Discover
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Create Event
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            My Network
                        </a>
                    </div>
                    <div className="space-x-4 pr-4">
                        <a href="#" className="hover:text-gray-300">
                            Login
                        </a>
                        <button className="py-2 px-4 rounded-full border-white border-2">
                            <a href="#">Get Started</a>
                        </button>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center text-white">
                    <h1 className="text-8xl mb-4 font-mi-fuente">
                        Connect Through <br /> Unforgettable Events
                    </h1>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Discover, organize, and share events with people from
                        your city and around the world. oin a vibrant community
                        that lives every moment to the fullest.
                    </p>
                    <button className="bg-blue-700 py-3 px-7 rounded-full hover:bg-blue-600 transition">
                        <a href="#">Browse Upcoming Events</a>
                    </button>
                    <p className="mt-4 text-gray-300 text-sm">
                        Create your free profile and start exploring today.
                    </p>
                </div>
            </div>

            <section className="flex flex-col items-center text-center px-4 py-20">
                <div className="flex items-center gap-3 mt-8">
                    <img
                        src="src/assets/face1.webp"
                        alt="client"
                        className="w-18 h-18 rounded-full  border-black -ml-2"
                    />
                    <img
                        src="src/assets/face2.webp"
                        alt="client"
                        className="w-18 h-18 rounded-full  border-black -ml-2"
                    />
                    <span className="text-yellow-400 text-2xl ">★★★★★</span>
                    <span className="text-lg text-gray-300">
                        Rated 5.0 on clutch
                    </span>
                </div>
            </section>

            <footer>
                <div className="relative py-12 bg-gradient-to-b from-transparent to-black">
                    <div className="max-w-5xl mx-auto text-center px-4">
                        <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">
                            Trusted by Leading Institutions
                        </p>

                        <div className="flex items-center justify-center flex-wrap gap-8">
                            <img
                                src="src/assets/cibertec.webp"
                                className="h-25 opacity-90"
                            />
                            <img
                                src="src/assets/idat.webp"
                                className="h-19 opacity-90"
                            />
                            <img
                                src="src/assets/ipm.webp"
                                className="h-12 opacity-90"
                            />
                            <img
                                src="src/assets/isil.webp"
                                className="h-23 opacity-90"
                            />
                            <img
                                src="src/assets/senati.webp"
                                className=" h-11 opacity-90"
                            />
                            <img
                                src="src/assets/tecsup.webp"
                                className="h-11 opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
