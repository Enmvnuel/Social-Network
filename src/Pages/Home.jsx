import Hero from "./LandingPage/Hero.jsx";
import Logos from "./LandingPage/Logos.jsx";
import FeedEventos from "./LandingPage/FeedEventos.jsx";
import Testimonial from "./LandingPage/Testimonial.jsx";
import JoinWailtlist from "./LandingPage/JoinWaitlist.jsx";
import Footer from "./LandingPage/Footer.jsx";

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
