import Footer from "../components/layout/Footer";

function FAQ() {
    const faqs = [
        {
            question: "¿Qué es BrainHub?",
            answer: "BrainHub es una red social diseñada para profesionales y entusiastas de la tecnología. Nuestra plataforma te permite descubrir, compartir y asistir a eventos, meetups y talleres sobre desarrollo, inteligencia artificial, diseño, hardware y más.",
        },
        {
            question: "¿Cómo puedo crear una cuenta?",
            answer: 'Puedes unirte a nuestra comunidad haciendo clic en el botón "Unete a BrainHub" o "Login" en la página de inicio. El proceso de registro es rápido y sencillo.',
        },
        {
            question: "¿Publicar un evento tiene algún costo?",
            answer: "No, publicar eventos en BrainHub es completamente gratis. Queremos fomentar un ecosistema donde el conocimiento y las oportunidades sean accesibles para todos.",
        },
        {
            question: "¿Qué tipo de eventos puedo encontrar en la plataforma?",
            answer: "Encontrarás una amplia variedad de eventos, desde conferencias y talleres técnicos hasta meetups de networking y hackathons. Cubrimos áreas como desarrollo de software, IA, ciberseguridad, startups, marketing digital y más.",
        },
        {
            question: "¿Cómo puedo contactar con el equipo de BrainHub?",
            answer: "Si tienes alguna pregunta, sugerencia o problema, no dudes en escribirnos a cristopherariasp@icloud.com. Estaremos encantados de ayudarte.",
        },
    ];

    return (
        <div className="bg-zinc-950 text-white min-h-screen font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">
                        Preguntas Frecuentes
                    </h1>
                    <p className="text-gray-400">
                        Encuentra respuestas a las dudas más comunes.
                    </p>
                </div>

                <div className="space-y-8 text-gray-300">
                    {faqs.map((faq, index) => (
                        <section key={index}>
                            <h2 className="text-2xl font-semibold mb-3 text-white">
                                {faq.question}
                            </h2>
                            <p>{faq.answer}</p>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;
