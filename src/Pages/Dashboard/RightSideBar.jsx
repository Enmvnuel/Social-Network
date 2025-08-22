import React from "react";

function RightSideBar() {
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
                        <div className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                            <p className="text-sm text-gray-500">
                                Tendencia en tu zona
                            </p>
                            <p className="font-bold">#react</p>
                            <p className="text-sm text-gray-500">1,234 posts</p>
                        </div>
                        <div className="hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                            <p className="text-sm text-gray-500">
                                Tendencia en tu zona
                            </p>
                            <p className="font-bold">#tailwindcss</p>
                            <p className="text-sm text-gray-500">5,678 posts</p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default RightSideBar;
