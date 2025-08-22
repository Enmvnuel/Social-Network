import { postData } from "./postData";
import Post from "./Post";

function Feed() {
    return (
        <>
            <main className="col-span-5 border-r border-gray-200">
                <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
                    <h1 className="text-xl font-bold">Inicio</h1>
                </div>

                {/* Create Post */}
                {/* <div className="p-4 border-b border-gray-200">
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
                    </div> */}

                {/* Feed */}
                <div className="divide-y divide-gray-200">
                    {postData.map((post, index) => (
                        <div
                            key={index}
                            className="p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                        >
                            <Post
                                id={index}
                                userPhoto={post.userPhoto}
                                userName={post.userName}
                                firstName={post.firstName}
                                lastName={post.lastName}
                                title={post.title}
                                description={post.description}
                                img={post.img}
                                dateevent={post.dateevent}
                                datepost={post.datepost}
                                location={post.location}
                                price={post.price}
                                tags={post.tags}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Feed;
