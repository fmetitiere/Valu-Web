import React from 'react';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import AvatarImage from '../_components/images/avatar.jpg';

const AvatarStyled = styled(Avatar)`
    z-index:1;
`;

export default function ImageAvatars() {
  return (
    <Grid container justify="center" alignItems="center">
      <AvatarStyled alt="Remy Sharp" src={AvatarImage}  />
    </Grid>
  );
}