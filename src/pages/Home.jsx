import Banner from '../sections/Banner';
import WhyInvest from '../sections/WhyInvest';
import LatestProperties from '../sections/LatestProperties';
import AboutUs from '../sections/AboutUs';
import FeatureProperties from '../sections/FeatureProperties';
import OurLocation from '../sections/OurLocation';
import Testimonial from '../sections/Testimonial';
import OurPartner from '../sections/OurPartner';
import FAQ from '../sections/FAQ';
import Blog from '../sections/Blog';

const Home = () => {
    return (
        <>
            <Banner />
            <WhyInvest />
            <LatestProperties />
            <AboutUs />
            <FeatureProperties />
            <OurLocation />
            <Testimonial />
            <OurPartner />
            <FAQ />
            <Blog />
        </>
    )
}

export default Home