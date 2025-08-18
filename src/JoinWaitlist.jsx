import React from "react";

function JoinWaitlist() {
    return (
        <section id="JoinWaitlist">
            <div className="mx-auto mt-16 max-w-xl p-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    BrainHub — Conecta con eventos tecnológicos
                </h2>

                <p className="mt-4 text-lg text-zinc-400">
                    La red social para profesionales y entusiastas de la
                    tecnología. Descubre, comparte y asiste a eventos de
                    desarrollo, IA, diseño, hardware y más.
                </p>

                <div className="mt-8">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-zinc-100 hover:shadow-lg transition"
                    >
                        Unete a BrainHub
                    </button>
                </div>
            </div>
        </section>
    );
}

export default JoinWaitlist;
