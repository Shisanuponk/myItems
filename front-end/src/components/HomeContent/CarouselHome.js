import React from "react";
import { Carousel } from "react-bootstrap";

import Home2 from '../../components/HomeContent/HomeIMG/2.png';
import Home3 from '../../components/HomeContent/HomeIMG/3.jpg';
import Home4 from '../../components/HomeContent/HomeIMG/4.jpg';



const CarouselHome = () => {
  return (
    <Carousel fade pause controls={true}>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Home4}
          alt="First slide"

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Home3}
          alt="Second slide"
        
          
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Home2}
          alt="Third slide"
         
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
