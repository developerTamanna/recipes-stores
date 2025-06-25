import React, { useEffect } from 'react';
import Banner from './Banner';
import Slider from '../Slider';
import TopNotchMenu from './TopNotchMenu';
import TopLike from './TopLike';
import TopLikeCard from './TopLikeCard';
import StorySection from './StorySection';
import ReservationSection from './ReservationSection';
import StrengthSection from './StrengthSection';
import SpecialDishSection from './SpecialDishSection';
import UpcomingEventSection from './UpcomingEventSection';
import Testimonial from './Testimonial';

const Home = () => {

    useEffect(()=>{
    
        document.title ="Recipe || Home"
      },[])
    
    
    return (
        <div>
            <Slider />
            <Banner />
            
            <TopNotchMenu />
            <div>
                <TopLikeCard></TopLikeCard>
            </div>
            <div className='mt-10'>
                <StorySection></StorySection>
            </div>
            <div className='mt-10'>
                <ReservationSection></ReservationSection>
            </div>
            <div className='mt-10'>
                <StrengthSection></StrengthSection>
            </div>
            <div className='mt-10'>
                <SpecialDishSection></SpecialDishSection>
            </div>
            <div className='mt-10'>
                <UpcomingEventSection></UpcomingEventSection>
            </div>
            <div className='mt-10'>
                <Testimonial></Testimonial>
            </div>

        </div>
    );
};

export default Home;
