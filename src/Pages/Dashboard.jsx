import React from "react";

function Dashboard() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">
                    Bienvenido al Dashboard
                </h1>
                <p className="text-lg mb-6">¡Estás autenticado!</p>
                <UserButton />
            </div>
        </>
    );
}

export default Dashboard;
