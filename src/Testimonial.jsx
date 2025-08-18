function Testimonial() {
    return (
        <>
            <section className="relative py-5">
                <div className="container mx-auto sm:px-4">
                    <div className="relative w-10/12 pb-6 mx-auto mb-2 text-center sm:max-w-3xl sm:px-6">
                        <div className="relative">
                            <h3 className="font-thin text-white sm:text-lg">
                                Me encanta la idea de BrainHub para reunir a la
                                comunidad tecnológica. Como{" "}
                                <b>organizadora de meetups y eventos</b>, me
                                gustaría mucho{" "}
                                <b>
                                    probar la plataforma cuando esté disponible
                                </b>
                                ; por ahora esta demo muestra el alcance
                                potencial y me anima a{" "}
                                <b>
                                    participar y publicar eventos en áreas como
                                    IA, desarrollo y hardware
                                </b>
                                . ¡Tengo ganas de probar BrainHub!
                            </h3>
                        </div>
                    </div>
                    <div className="relative z-50 mb-8 text-center text-gray-200">
                        <img
                            className="w-20 h-20 mx-auto mb-3 rounded-full "
                            src="assets/img/mark.png"
                            alt="Foto de perfil"
                        />
                        <h3 className="text-lg font-thin text-white">
                            <b>Mark</b>, CEO de una Pyme
                        </h3>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;
