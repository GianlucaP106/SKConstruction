import React from 'react';
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import demo from "../assets/images/demo.png";

export default function CarouselDisplay() {
    return (
        <Carousel>
            <Carousel.Item interval={null}> 
                <img className="d-block w-100" src={demo} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>   
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item interval={null}>
                <img className="d-block w-100" src="" alt="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={null}>
                <img className="d-block w-100" src="" alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    );
}