import React, { Component } from "react";
import Carousel from 'react-elastic-carousel';

// Import Events data
import Events from "../../storage/Events";

const SlideCarousel = () => {
  
  return (
    <div>
      <Carousel>
        {Events.map((item, index) => 
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.img}</p>
            <p>{item.detail}</p>
            <p>{item.link}</p>
          </div>
        )}
      </Carousel>
    </div>
  )
}

export default SlideCarousel;
