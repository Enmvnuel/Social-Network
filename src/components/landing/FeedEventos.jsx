import { cardData } from "../../data/landingPageData.js";
import Card from "../common/Card.jsx";

function FeedEventos() {
    return (
        <>
            <section id="FeedEventos" className="px-4 sm:px-6 lg:px-8">
                <div className="text-white text-center my-8 sm:my-12 lg:my-15">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold px-4">
                        Feed de eventos — descubre, explora y asiste
                    </h1>
                    <p className="text-base sm:text-lg mt-4 max-w-2xl mx-auto px-4">
                        Aquí se muestran los eventos y meetups disponibles para
                        asistir. Filtra, explora y únete a las actividades que
                        más te interesen para conectar con la comunidad tech.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 place-items-center mx-auto max-w-7xl text-black">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            id={index}
                            image={card.image}
                            day={card.day}
                            month={card.month}
                            title={card.title}
                            description={card.description}
                            url={card.url}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default FeedEventos;
