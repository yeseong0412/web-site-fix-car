import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BookingAndContact from './components/BookingAndContact.tsx';

function App() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <BookingAndContact />
            <Reviews />
            <Footer />
        </div>
    );
}

export default App;
