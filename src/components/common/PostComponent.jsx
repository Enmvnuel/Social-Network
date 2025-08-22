function PostComponent({
    title,
    description,
    img,
    dateEvent,
    location,
    price,
    tags,
    userPhoto,
    firstName,
    userName,
    datePost,
    url,
}) {
    const handleRedirect = (e) => {
        e.preventDefault();
        if (url) window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <a
            href={url}
            onClick={handleRedirect}
            className="flex space-x-3 no-underline hover:bg-gray-50 rounded-xl transition-colors duration-200 cursor-pointer p-2"
            tabIndex={0}
            rel="noopener noreferrer"
            target="_blank"
        >
            <div className="flex-shrink-0">
                <img
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                    src={userPhoto}
                    alt={`${firstName} ${userName}`}
                />
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 mb-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {firstName}
                    </h3>
                    <span className="text-gray-500 font-normal text-sm sm:text-base">
                        @{userName}
                    </span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500 text-xs sm:text-sm">
                        {datePost}
                    </span>
                </div>

                <h2 className="text-base sm:text-base font-medium text-gray-900 mb-2 leading-snug">
                    {title}
                </h2>

                <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-">
                    {description}
                </p>

                {img && (
                    <div className="mb-3">
                        <img
                            className="w-100 rounded-xl border border-gray-200"
                            src={img}
                            alt="Imagen del evento"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                        <span>📍</span>
                        <span className="truncate">{location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>🎟️</span>
                        <span className="font-medium text-green-600">
                            {price}
                        </span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>{dateEvent}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags &&
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                            >
                                #{tag}
                            </span>
                        ))}
                </div>

                <div className="flex items-center justify-between max-w-xs sm:max-w-md">
                    <button
                        type="button"
                        className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-red-500 hover:bg-red-50 px-2 sm:px-3 py-2 rounded-full transition-all duration-200 group"
                        tabIndex={-1}
                    >
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">
                            12
                        </span>
                    </button>

                    <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 px-2 sm:px-3 py-2 rounded-full transition-all duration-200 group">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        <span className="text-xs sm:text-sm font-medium">
                            5
                        </span>
                    </button>

                    <button className="flex items-center space-x-1 sm:space-x-2 text-gray-500 hover:text-green-500 hover:bg-green-50 px-2 sm:px-3 py-2 rounded-full transition-all duration-200 group">
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </a>
    );
}

export default PostComponent;
