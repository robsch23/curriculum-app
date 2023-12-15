import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const AppLayout = () => {
  return (
    <React.Fragment>
      <Container sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Container id='container-navbar' sx={{ position: 'fixed', width: '100%', zIndex: 100 }}>
          <Navbar />
        </Container>
        <Container id='container-content' sx={{ height: '2000px' }}>
          <Typography sx={{marginTop:'200px'}}>contentttt</Typography>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default AppLayout;
