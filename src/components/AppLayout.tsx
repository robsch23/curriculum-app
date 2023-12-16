import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import { useSpring, animated } from 'react-spring';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const AppLayout = () => {

  // sezione da poi riportare nella scena Home
  const [springProps, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-500px)',
    config: { duration: 1000 }, // Durata dell'animazione in millisecondi
    from: { opacity: 0, transform: 'translateX(-500px)' },
  }));

  React.useEffect(() => {
    set({ opacity: 1, transform: 'translateX(0)', delay:500 });
  }, [set]);
  // fine elementi scena home

  return (
    <React.Fragment>
        <Container id='container-navbar' sx={{ position: 'fixed', width: '100%', zIndex: 100 }}>
          <Navbar />
        </Container>

        <Box display={'flex'} flexDirection={'column'} justifyContent={'start'} mt={8}>
          
            {/* Home component */}
            <Box className={'home'} height={'95vh'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>

              <Box flex={1} height={'100%'}>
                <Paper elevation={24} style={{ width: '100%', height: '100%' }}>
                  <img
                    src="/WhatsApp Image 2023-12-16 at 20.13.52.jpeg"
                    alt="immagine"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Paper>
              </Box>
              
              <Box className={'home-name'} flex={2}>
                <animated.div className={'home-name'} style={springProps}>
                  <Typography fontWeight={'bold'} textTransform={'uppercase'} variant="h2" color="primary" align="center">
                    Roberto
                  </Typography>
                  <Typography fontWeight={'bold'} textTransform={'uppercase'} variant="h1" color="secondary" align="center">
                    Schiavelli
                  </Typography>
                  <Typography align='center' letterSpacing={3}>AI Developer</Typography>

                  <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={5} mt={3}>
                    <Box sx={{ cursor:'pointer', '&:hover': {color:'#556cd6'}, transition:'color 0.3s ease-in-out' }}><FaGithub size={25} /></Box>
                    <Box sx={{ cursor:'pointer', '&:hover': {color:'#556cd6'}, transition:'color 0.3s ease-in-out' }}><FaLinkedin size={25} /></Box>
                    <Box sx={{ cursor:'pointer', '&:hover': {color:'#556cd6'}, transition:'color 0.3s ease-in-out' }}><FaInstagram size={25} /></Box>
                    <Box sx={{ cursor:'pointer', '&:hover': {color:'#556cd6'}, transition:'color 0.3s ease-in-out' }}><FaFacebook size={25} /></Box>
                  </Box>
                </animated.div>
              </Box>

              <Box position={'absolute'} bottom={'10%'} left={'94%'}>
                <Typography variant="h1" color="white" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', opacity:0.02 }}>
                      Home
                </Typography>
              </Box>
              
            </Box>
            {/* end Home component */}


          <Typography height={'100vh'}>SEZIONE ABOUT</Typography>
          <Typography>SEZIONE SKILLS</Typography>
          <Typography>EXPERIENCE</Typography>

        </Box>
    </React.Fragment>
  );
};

export default AppLayout;
