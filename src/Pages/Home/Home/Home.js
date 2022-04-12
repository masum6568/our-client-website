import React from 'react';
import ExtraPart from '../../Extra/ExtraPart';
import SecondExtraPart from '../../Extra/SecondExtraPart';
import Services from '../../Services/Services';
import Testimonial from '../../Services/Testimonial/Testimonial';
import Banner from '../../Shared/Banner';
import Footer from '../../Shared/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SecondExtraPart></SecondExtraPart>
            <ExtraPart></ExtraPart>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
    );
};

export default Home;