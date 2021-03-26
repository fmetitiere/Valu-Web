import React from 'react';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import AvatarImage from '../images/avatar.jpg';

const AvatarStyled = styled(Avatar)`
    z-index:1;
`;

const AvatarWrapper = styled(Grid)`
border-radius: .5rem;
padding: .2rem;
  div {
    width: 10rem !important;
    height: 10rem !important;
    border-radius: 5rem !important;
  }
`;

export default function ImageAvatars() {
  return (
    <AvatarWrapper container justify="center" alignItems="center">
      <AvatarStyled alt="Nano Metitiere" src={AvatarImage}  />
    </AvatarWrapper>
  );
}