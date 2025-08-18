import { cardData } from "./data.js";
import Card from "./Card.jsx";

function FeedEventos() {
    return (
        <>
            <section id="FeedEventos">
                <div className="text-white text-center my-15">
                    <h1 className="text-4xl font-semibold">
                        Feed de eventos — descubre, explora y asiste
                    </h1>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">
                        Aquí se muestran los eventos y meetups disponibles para
                        asistir. Filtra, explora y únete a las actividades que
                        más te interesen para conectar con la comunidad tech.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-8 place-items-center mx-auto max-w-5xl text-black">
                    {cardData.map((card, index) => (
                        <Card
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
