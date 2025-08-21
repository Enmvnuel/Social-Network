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
                <p className="font-bold">{firstName || "Mi Perfil"}</p>

                <p className="text-sm text-gray-500">
                    @{username || "usuario"}
                </p>
            </div>
        </div>
    );
}

export default PerfilClerk;
