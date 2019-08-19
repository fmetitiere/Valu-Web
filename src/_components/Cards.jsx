import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Styled from 'styled-components';

import BackgroundImage from '../_components/images/banner.png'

const CardStyled = Styled(Card)`
    width: 100vw;
    padding: 1rem;
    background: white;
    border-radius: 0;
    &.MuiPaper-rounded-3 {
        border-radius: 0px !important;
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
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