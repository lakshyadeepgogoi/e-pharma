import React from 'react'
import HomeSectionCard from './HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function HomeSectionCarosal() {

    
const responsive = {
    0: { items: 1,},
    608: { items: 2 },
    1024: { items: 3 },
    1524:{items: 4},
};

const items =[1,1,1,1,1,1,1,1,1,].map((item)=><HomeSectionCard/>)

   
  return (
    <div className='relative px-4 lg:px-8 flex flex-row'>
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        
        />
        
      
    </div>
  )
}

export default HomeSectionCarosal