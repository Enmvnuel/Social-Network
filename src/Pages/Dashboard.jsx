import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

import { useState } from "react";
import PerfilClerk from "./Other/UserButton";

const HomeIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const HashIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="4" x2="20" y1="9" y2="9" />
        <line x1="4" x2="20" y1="15" y2="15" />
        <line x1="10" x2="8" y1="3" y2="21" />
        <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
);

const UserIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const SearchIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

function Dashboard() {
    const { user } = useUser();

    const [activeTab, setActiveTab] = useState("Inicio");

    const navItems = [
        { name: "Inicio", icon: HomeIcon },
        { name: "Explorar", icon: HashIcon },
        { name: "Perfil", icon: UserIcon },
    ];

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-screen-xl mx-auto grid grid-cols-10">
                {/* Left Sidebar */}
                <aside className="col-span-2 border-r border-gray-200 flex flex-col justify-between p-4 h-screen sticky top-0">
                    <div>
                        <div className="flex items-center space-x-2 mb-8">
                            <img
                                src="assets/img/logo.png"
                                alt="BrainHub Logo"
                                className="h-10 w-10"
                            />
                            <span className="text-2xl font-bold">BrainHub</span>
                        </div>
                        <nav>
                            <ul>
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href="#"
                                            onClick={() =>
                                                setActiveTab(item.name)
                                            }
                                            className={`flex items-center space-x-4 py-3 px-4 rounded-full transition-colors duration-200 ${
                                                activeTab === item.name
                                                    ? "font-bold bg-gray-100"
                                                    : "hover:bg-gray-100"
                                            }`}
                                        >
                                            <item.icon className="h-6 w-6" />
                                            <span className="text-xl">
                                                {item.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <button className="w-full mt-6 bg-indigo-600 text-white font-bold text-lg py-3 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                            Publicar
                        </button>
                    </div>
                    <div className="mt-auto">
                        <SignedIn>
                            <div className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                                <PerfilClerk afterSignOutUrl="/" />
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="col-span-5 border-r border-gray-200">
                    <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
                        <h1 className="text-xl font-bold">Inicio</h1>
                    </div>

                    {/* Create Post */}
                    <div className="p-4 border-b border-gray-200">
                        <div className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    src={user.imageUrl}
                                    alt="Foto de usuario"
                                    style={{
                                        borderRadius: "50%",
                                        width: 40,
                                        height: 40,
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <textarea
                                    className="w-full text-xl p-2 border-none focus:ring-0 resize-none"
                                    rows="2"
                                    placeholder="¿Qué está pasando?"
                                ></textarea>
                                <div className="flex justify-end mt-2">
                                    <button className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 disabled:opacity-50">
                                        Publicar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feed */}
                    <div className="flow-root">
                        <div className="flex  p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <img
                                src={user.imageUrl}
                                alt="Foto de usuario"
                                style={{
                                    borderRadius: "50%",
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            <p>Este es un ejemplo de una publicación.</p>
                        </div>
                        <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <p>Este es otro ejemplo de una publicación.</p>
                        </div>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="col-span-3 p-4 h-screen sticky top-0">
                    <div className="relative mb-6">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar en BrainHub"
                            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="bg-gray-100 rounded-2xl p-4">
                        <h2 className="text-xl font-bold mb-4">
                            Qué está pasando
                        </h2>
                        <div className="space-y-4">
                            <div className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                                <p className="text-sm text-gray-500">
                                    Tendencia en tu zona
                                </p>
                                <p className="font-bold">#react</p>
                                <p className="text-sm text-gray-500">
                                    1,234 posts
                                </p>
                            </div>
                            <div className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                                <p className="text-sm text-gray-500">
                                    Tendencia en tu zona
                                </p>
                                <p className="font-bold">#tailwindcss</p>
                                <p className="text-sm text-gray-500">
                                    5,678 posts
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Dashboard;
