import React from "react";

function RightSideBar() {
    const trends = [
        {
            category: "Tecnología",
            name: "#tecnologia",
            posts: "15.3k posts",
        },
        {
            category: "Negocios",
            name: "#emprendimiento",
            posts: "12.1k posts",
        },
        {
            category: "Desarrollo profesional",
            name: "#networking",
            posts: "8.7k posts",
        },
        {
            category: "Marketing",
            name: "#marketingdigital",
            posts: "5.2k posts",
        },
        {
            category: "Ciencia y tecnología",
            name: "#innovacion",
            posts: "4.9k posts",
        },
        {
            category: "Programación",
            name: "#desarrolloweb",
            posts: "3.1k posts",
        },
        {
            category: "Tecnología",
            name: "#inteligenciaartificial",
            posts: "2.8k posts",
        },
    ];

    return (
        <>
            <aside className="hidden xl:block col-span-3 p-4 h-screen sticky top-0">
                <div className="bg-gray-100 rounded-2xl p-4">
                    <h2 className="text-xl font-bold mb-4">Qué está pasando</h2>
                    <div className="space-y-3">
                        {trends.map((trend, index) => (
                            <div
                                key={index}
                                className="hover:bg-gray-200 p-3 rounded-lg cursor-pointer transition-colors duration-200"
                            >
                                <p className="text-sm text-gray-500">
                                    Tendencia en {trend.category}
                                </p>
                                <p className="font-bold text-gray-900">
                                    {trend.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {trend.posts}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}

export default RightSideBar;
