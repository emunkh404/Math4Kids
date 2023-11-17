import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'; // Assuming you have a CSS file for custom styles

export default function Carousels() {
  return (
    <div className="carousel-container"> {/* Optional container for additional styling */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={"/images/math1.png"} alt="First slide"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={"/images/math2.png"} alt="Second slide"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={"/images/math3.png"} alt="Third slide"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


