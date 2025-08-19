import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/clerk-react";

function Hero() {
    return (
        <>
            <section id="Hero">
                <div className="px-55">
                    <nav className="mt-7">
                        <div className="flex justify-between items-center text-white">
                            <div className="mr-10 flex">
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
                                <a
                                    href="FeedEventos"
                                    className="hover:text-gray-300"
                                >
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
                            </div>
                            <div className="space-x-8">
                                <a href="#" className="hover:text-gray-300">
                                    FAQ
                                </a>
                                <SignedOut>
                                    <SignInButton>
                                        <button
                                            className="group relative rounded-full p-px text-sm/6 text-white duration-300 hover:text-zinc-100 hover:shadow-glow font-semibold border border-gray-500 hover:scale-110 hover:transition-transform cursor-pointer"
                                            type="button"
                                        >
                                            <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                                                Unete a BrainHub
                                            </div>
                                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-indigo-400/90 to-pink-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-row justify-between items-end text-white mt-30 mb-10">
                        <div className="text-7xl">
                            <h1>Conecta.</h1>
                            <h1>Crea.</h1>
                            <h1>Crece.</h1>
                        </div>
                        <div className="flex flex-1 flex-row items-end justify-between ">
                            <div className="flex-1 flex justify-center pr-40">
                                <span className="text-4xl text-white text-center">
                                    /
                                </span>
                            </div>
                            <button className="bg-white py-2 px-4 rounded-full text-black font-semibold flex items-center gap-2 ml-8">
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
                        className="w-full h-48 sm:h-64 md:h-96 lg:h-[420px] xl:h-[420px] 2xl:h-[570px]"
                    />
                </div>
            </section>
        </>
    );
}

export default Hero;
