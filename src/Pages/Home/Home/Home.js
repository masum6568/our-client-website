import React from 'react';
import ExtraPart from '../../Extra/ExtraPart';
import SecondExtraPart from '../../Extra/SecondExtraPart';
import ThirdExtraPart from '../../Extra/ThirdExtraPart';
import LoadData from '../../Services/LoadService/LoadData';
import Services from '../../Services/Services';




import Testimonial from '../../Services/Testimonial/Testimonial';
import Banner from '../../Shared/Banner';
import Footer from '../../Shared/Footer';
import Homes from './Homes';






// import Homes from './Homes';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ThirdExtraPart></ThirdExtraPart>
<Homes></Homes>


            <SecondExtraPart></SecondExtraPart>
            <LoadData></LoadData>
            <ExtraPart></ExtraPart>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
    );
};

export default Home;