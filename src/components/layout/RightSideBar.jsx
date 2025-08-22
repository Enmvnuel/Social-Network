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
            <aside className="col-span-3 p-4 h-screen sticky top-0">
                {/* <div className="relative mb-6">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar en BrainHub"
                            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div> */}

                <div className="bg-gray-100 rounded-2xl p-4">
                    <h2 className="text-xl font-bold mb-4">Qué está pasando</h2>
                    <div className="space-y-4">
                        {trends.map((trend, index) => (
                            <div
                                key={index}
                                className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer"
                            >
                                <p className="text-sm text-gray-500">
                                    Tendencia en {trend.category}
                                </p>
                                <p className="font-bold">{trend.name}</p>
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
