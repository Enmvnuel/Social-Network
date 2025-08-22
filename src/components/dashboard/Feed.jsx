import { postData } from "../../data/initialPosts";
import PostComponent from "../common/PostComponent";

function Feed() {
    return (
        <>
            <main className="col-span-12 lg:col-span-6 border-r border-gray-200">
                {/* Desktop Header - Solo visible en desktop */}
                <div className="hidden lg:block sticky top-0 bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200 px-4 py-3 z-10">
                    <h1 className="text-xl font-bold">Inicio</h1>
                </div>

                {/* Feed Content */}
                <div className="divide-y divide-gray-200 lg:mt-0">
                    {postData.map((post, index) => (
                        <div
                            key={index}
                            className="p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                        >
                            <PostComponent
                                id={index}
                                userPhoto={post.userPhoto}
                                userName={post.userName}
                                firstName={post.firstName}
                                lastName={post.lastName}
                                title={post.title}
                                description={post.description}
                                img={post.img}
                                dateEvent={post.dateEvent}
                                datePost={post.datePost}
                                location={post.location}
                                price={post.price}
                                tags={post.tags}
                                url={post.url}
                            />
                        </div>
                    ))}
                </div>

                {/* Spacing for mobile navigation */}
                <div className="h-20 lg:h-0"></div>
            </main>
        </>
    );
}

export default Feed;
