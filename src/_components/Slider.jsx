import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Cards from '../_components/Cards';

export default function Slider(){
    return(
        <Carousel showArrows={false} showThumbs={false} infiniteLoop emulateTouch>
            <div>
                <Cards></Cards>
            </div>
            <div>
            <Cards></Cards>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}