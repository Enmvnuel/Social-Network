import { UserButton, useUser } from "@clerk/clerk-react";
import React, { useRef } from "react";

function PerfilClerk() {
    const userButtonRef = useRef(null);
    const { user } = useUser();

    // Obtener el primer nombre y el nombre de usuario
    const firstName = user?.firstName;
    const username = user?.username;

    const handleContainerClick = () => {
        const popupTrigger = userButtonRef.current?.querySelector("button");
        if (popupTrigger) {
            popupTrigger.click();
        }
    };

    return (
        <div
            className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            onClick={handleContainerClick}
            ref={userButtonRef}
        >
            <UserButton afterSignOutUrl="/" />
            <div className="text-left">
                <p className="font-bold">
                    {firstName || "Mi Perfil"}
                    <svg
                        className="inline w-4 h-4 ml-1 mb-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                    >
                        <polygon
                            fill="#42a5f5"
                            points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                        ></polygon>
                        <polygon
                            fill="#fff"
                            points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                        ></polygon>
                    </svg>
                </p>

                <p className="text-sm text-gray-500">
                    @{username || "usuario"}
                </p>
            </div>
        </div>
    );
}

export default PerfilClerk;
