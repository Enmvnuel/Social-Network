function Card({ image, day, month, title, description, url }) {
    return (
        <div className="max-w-sm bg-gradient-to-br from-zinc-900/10 to-zinc-800/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.6)] group hover:shadow-[0_20px_40px_rgba(2,6,23,0.7)] transition-transform duration-300 hover:-translate-y-3 border border-white/6">
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40"
            >
                <div className="relative h-56 overflow-hidden">
                    <img
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        src={image}
                        alt={title}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                    <div className="absolute top-4 left-4 backdrop-blur-md bg-black/40 text-white rounded-2xl px-3 py-2 flex flex-col items-center shadow-md ring-1 ring-white/10">
                        <span className="text-lg font-extrabold leading-none">
                            {day}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide">
                            {month}
                        </span>
                    </div>
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-zinc-300 mb-4">{description}</p>

                    <div className="flex items-center justify-between">
                        <span className="text-indigo-800 font-semibold">
                            Leer más
                        </span>
                        <svg
                            className="w-5 h-5 text-indigo-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Card;
