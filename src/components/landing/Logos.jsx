function Logos() {
    return (
        <>
            <section id="Logos">
                <div className="bg-red">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-30 2xl:gap-50 object-fill w-full mb-20 px-4 py-6">
                        <img
                            className="h-6 sm:h-7 md:h-8"
                            src="assets/img/logos/google.png"
                            alt="Google"
                        />
                        <img
                            className="h-5 sm:h-6 md:h-7"
                            src="assets/img/logos/meta.png"
                            alt="Meta"
                        />
                        <img
                            className="h-6 sm:h-7 md:h-8"
                            src="assets/img/logos/microsoft.png"
                            alt="Microsoft"
                        />
                        <img
                            className="h-6 sm:h-7 md:h-8"
                            src="assets/img/logos/openai.png"
                            alt="OpenAI"
                        />
                        <img
                            className="h-4 sm:h-5 md:h-5"
                            src="assets/img/logos/oracle.png"
                            alt="Oracle"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Logos;
