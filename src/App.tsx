import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BookingAndContact from './components/BookingAndContact.tsx';
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <div className="min-h-screen">
            <Analytics/>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <title>강남 자동차 에어컨 수리 | 강남 카 에어컨</title>
                <meta name="description" content="강남에서 전문적인 자동차 에어컨 수리 서비스를 제공합니다. 고객 맞춤형 서비스와 빠른 수리."/>
                <meta name="keywords"
                      content="강남 자동차 수리, 강남 에어컨 수리, 서울 차 수리, 자동차 에어컨 수리, 자동차 에어컨, 강남 차 수리, 서울 에어컨 차수리, 강남 차 에어컨, 강남 에어컨, 강남 차 수리, 강남 차 에어콘, 차 수리, 서울 차 에어콘 수리"/>
                <meta property="og:title" content="강남 자동차 에어컨 수리 | 강남 차 에어컨"/>
                <meta property="og:description" content="강남에서 제공하는 최고의 자동차 에어컨 수리 서비스"/>
                <meta property="og:url" content="https://web-site-fix-car.vercel.app/"/>
            </Helmet>
            <Navbar/>
            <Hero/>
            <Services />
            <BookingAndContact />
            <Reviews />
            <Footer />
        </div>
    );
}

export default App;
