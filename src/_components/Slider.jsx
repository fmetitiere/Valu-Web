import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const CarouselStyled = Styled(Carousel)`
    .MuiPaper-elevation1-5 {
        box-shadow: none !important;
    }
    .carousel .slide {
        background: transparent;
        padding: .5rem;
    }
`;

const CardStyled = Styled(Card)`
    width: 100%;
    background: white;
    
    &.MuiPaper-rounded-3 {
       
    }
    .MuiCard-root-1 {
        width: 100% !important;
    }
    button div{
        height: 10rem !important;
    }
`;

export default function Slider({ image1, title1, image2, title2 }) {
	return (
		<CarouselStyled
			showStatus={false}
			showIndicators={false}
			showArrows={false}
			showThumbs={false}
			infiniteLoop
            emulateTouch
            centerMode 
		>
			<div>
				<CardStyled>
					<CardActionArea>
						<CardMedia image={image1} title="Contemplative Reptile" />
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							{title1}
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</CardStyled>
			</div>
			<div>
				<CardStyled>
					<CardActionArea>
						<CardMedia image={image2} title="Contemplative Reptile" />
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							{title2}
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</CardStyled>
			</div>
			
		</CarouselStyled>
	);
}
