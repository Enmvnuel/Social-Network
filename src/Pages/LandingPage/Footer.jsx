import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <footer id="Footer" className="relative">
                <div className="relative z-10 mx-auto max-w-7xl p-6 pt-10 text-zinc-400">
                    <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <span className="text-sm font-semibold text-zinc-200">
                                BrainHub
                            </span>
                            <span className="text-xs">
                                Red social para descubrir eventos y meetups de
                                tecnología
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (antes Twitter)"
                                className="text-zinc-400 hover:text-zinc-300"
                            >
                                <svg
                                    className="h-6 w-6 mt-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                                    ></path>
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-zinc-400 hover:text-zinc-300"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M21 1.5H3c-.83 0-1.5.68-1.5 1.51V21c0 .83.67 1.51 1.5 1.51h18c.82 0 1.5-.68 1.5-1.51V3c0-.83-.68-1.51-1.5-1.51Zm-13.15 18H4.73V9.48h3.12V19.5ZM6.29 8.1a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Zm13.22 11.4h-3.1v-4.88c0-1.16-.03-2.65-1.63-2.65-1.62 0-1.87 1.26-1.87 2.57v4.96h-3.1V9.48h2.98v1.37h.04a3.28 3.28 0 0 1 2.95-1.62c3.15 0 3.73 2.08 3.73 4.78v5.49Z" />
                                </svg>
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-zinc-400 hover:text-zinc-300"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.16 7.69 10.64.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .17.79 1.04.79 1.04.9 1.55 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.42.11-2.96 0 0 .96-.31 3.15 1.15a10.9 10.9 0 012.87-.39c.97.01 1.95.13 2.87.39 2.19-1.46 3.15-1.15 3.15-1.15.61 1.54.23 2.68.11 2.96.72.79 1.16 1.8 1.16 3.02 0 4.33-2.64 5.29-5.16 5.56.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .3.2.65.78.54C20.03 20.9 23.25 16.7 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
                                </svg>
                            </a>
                        </div>

                        <div className="text-xs text-zinc-500 max-w-full md:max-w-[40%] md:text-right">
                            <div>
                                © {year} BrainHub — Conecta con eventos y
                                comunidades de tecnología.
                            </div>
                            <div className="mt-2 flex gap-4 justify-start md:justify-end">
                                <a
                                    className="hover:text-zinc-300"
                                    href="/legal/privacy"
                                >
                                    Política de privacidad
                                </a>
                                <a
                                    className="hover:text-zinc-300"
                                    href="/legal/terms"
                                >
                                    Términos de uso
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute left-0 bottom-0 w-full object-cover pointer-events-none -z-10 opacity-85"
                    src="/assets/img/gradient.svg"
                    alt=""
                    aria-hidden="true"
                />
            </footer>
        </>
    );
}

export default Footer;
