import Hero from "../components/layout/Hero.jsx";
import Logos from "../components/landing/Logos.jsx";
import FeedEventos from "../components/landing/FeedEventos.jsx";
import Testimonial from "../components/landing/Testimonial.jsx";
import JoinWailtlist from "../components/landing/JoinWaitlist.jsx";
import Footer from "../components/layout/Footer.jsx";

function Home() {
    return (
        <>
            <div className="bg-black">
                <Hero />
                <Logos />
                <FeedEventos />
                <Testimonial />
                <JoinWailtlist />
                <Footer />
            </div>
        </>
    );
}

export default Home;
