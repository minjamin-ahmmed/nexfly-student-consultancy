
import Advantages from '../Pages/Advantages';
import Advice from '../Pages/Advice';
import Banner from '../Pages/Banner';
import DiscoverUniversities from '../Pages/DiscoverUniversities';
import Events from '../Pages/Events';
import HelpContainer from '../Pages/HelpContainer';
import Services from '../Pages/Services';
import Testimonial from '../Pages/Testimonial';
import Video from '../Pages/Video';

const Home = () => {
    return (
        <div className='w-full mx-auto'>
            <Banner></Banner>
            <HelpContainer />
            <Services></Services>
            <Advantages></Advantages>
            <Events></Events>
            <DiscoverUniversities></DiscoverUniversities>
            <Video></Video>
            <Advice></Advice>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;