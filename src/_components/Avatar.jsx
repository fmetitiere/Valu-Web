import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import AvatarImage from '../_components/images/avatar.jpg';

export default function ImageAvatars() {
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={AvatarImage}  />
    </Grid>
  );
}