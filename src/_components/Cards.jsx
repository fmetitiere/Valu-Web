import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import Styled from 'styled-components';

import BackgroundImage from '../images/banner.jpg'

const CardStyled = Styled(Card)`
    width: 100%;
    background: white;
    
    &.MuiPaper-rounded-3 {
       
    }
    .MuiCard-root-1 {
        width: 100% !important;
    }
    .MuiCardMedia-root-35 {
        height: 10rem;
    }
`;

export default function MediaCard() {


  return (
    <CardStyled >
      <CardActionArea>
        <CardMedia
          image={BackgroundImage}
          title="Contemplative Reptile"
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </CardStyled>
  );
}