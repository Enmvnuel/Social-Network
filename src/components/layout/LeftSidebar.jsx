import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

import { useState } from "react";
import PerfilClerk from "../common/UserButton";
import PostFormModal from "../forms/PostForm";

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

const PlusIcon = (props) => (
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
        <line x1="12" x2="12" y1="5" y2="19" />
        <line x1="5" x2="19" y1="12" y2="12" />
    </svg>
);

function Sidebar() {
    const { user } = useUser();

    const [activeTab, setActiveTab] = useState("Inicio");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        { name: "Inicio", icon: HomeIcon },
        { name: "Explorar", icon: HashIcon },
        { name: "Perfil", icon: UserIcon },
    ];

    const handlePostSubmit = (postData) => {
        console.log("Nueva publicación:", postData);
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="lg:hidden fixed bottom-22 right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 z-40 hover:scale-105"
            >
                <PlusIcon className="h-6 w-6" />
            </button>

            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 py-2">
                <div className="flex justify-around">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`flex flex-col items-center p-2 transition-colors duration-200 rounded-lg ${
                                activeTab === item.name
                                    ? "text-indigo-600 bg-indigo-50"
                                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                            }`}
                        >
                            <item.icon className="h-6 w-6 " />
                            <span className="text-xs mt-1 font-medium">
                                {item.name}
                            </span>
                        </button>
                    ))}
                </div>
            </nav>

            <aside className="hidden lg:flex col-span-2 border-r border-gray-200 flex-col justify-between p-4 h-screen sticky top-0">
                <div>
                    <div className="flex items-center space-x-2 mb-8">
                        <img
                            src="assets/img/favicon-dark.png"
                            alt="BrainHub Logo"
                            className="h-10 w-11    "
                        />
                        <span className="text-2xl font-bold">BrainHub</span>
                    </div>
                    <nav>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href="#"
                                        onClick={() => setActiveTab(item.name)}
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
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full mt-6 bg-indigo-600 text-white font-bold text-lg py-3 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-200 cursor-pointer"
                    >
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

            {/* Modal del formulario */}
            <PostFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handlePostSubmit}
            />
        </>
    );
}

export default Sidebar;
