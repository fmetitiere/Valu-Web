import React from 'react';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import AvatarImage from '../images/avatar.jpg';

const AvatarStyled = styled(Avatar)`
    z-index:1;
`;

function changeImageSize({desktop}){
  return(
    desktop && `
    width: 11rem !important;
    height: 11rem !important;
    `
    ||
    `width: 10rem !important;
    height: 10rem !important;`
  )
}

const AvatarWrapper = styled(Grid)`
border-radius: .5rem;
padding: .2rem;
  div {
    ${changeImageSize}
    border-radius: 5rem !important;
  }
`;

export default function ImageAvatars({desktop}) {
  return (
    <AvatarWrapper desktop={desktop} container justify="center" alignItems="center">
      <AvatarStyled alt="Nano Metitiere" src={AvatarImage}  />
    </AvatarWrapper>
  );
}