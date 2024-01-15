import { Box, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import { useSpring, animated } from 'react-spring';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Plx from 'react-plx';

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
            <Box className={'home'} height={'100vh'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>

              <Box flex={1} height={'100%'}>
                <Plx parallaxData={[
                  {
                    start: 400,
                    end: 800,
                    properties: [
                      {
                        startValue: 1,
                        endValue: 0,
                        property: "opacity"
                      }
                    ]
                  },
                  {
                    start: 400,
                    end: 800,
                    properties: [
                      {
                        startValue: 0,
                        endValue: -900,
                        property: "translateX"
                      }
                    ]
                  }
                ]}>
                    <Paper elevation={0} style={{ width: '100%', height: '100%' }}>
                      <img
                        src="/WhatsApp Image 2023-12-16 at 20.13.52.jpeg"
                        alt="immagine"
                        style={{ width: '105%', height: '100%', objectFit: 'cover' }}
                        />
                    </Paper>
                </Plx>
              </Box>
              
              <Box className={'home-name'} flex={2}>
                <Plx parallaxData={[
                    {
                      start: 500,
                      end: 800,
                      properties: [
                        {
                          startValue: 0,
                          endValue: 400,
                          property: "translateX"
                        }
                      ]
                    }
                  ]}>
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
                </Plx>
              </Box>

              <Box position={'absolute'} bottom={'10%'} left={'94%'}>
                <Plx parallaxData={[
                    {
                      start: 400,
                      end: 600,
                      properties: [
                        {
                          startValue: 0,
                          endValue: 75,
                          property: "translateX"
                        }
                      ]
                    }
                  ]}>
                    <Typography variant="h1" color="white" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', opacity:0.1 }}>
                          Home
                    </Typography>
                  </Plx>
              </Box>
              
            </Box>
            {/* end Home component */}


          <Typography height={'100vh'} mt={-6}>SEZIONE ABOUT</Typography>
          <Plx parallaxData={[
              {
                start: 1000,
                end: 1500,
                properties: [
                  {
                    startValue: 1,
                    endValue: 0,
                    property: "opacity"
                  }
                ]
              }
            ]}>
            <img src='/LogoPyRoby_1_-removebg-preview.png' alt='logo' />
          </Plx>
          <Typography height={'100vh'}>SEZIONE SKILLS</Typography>
          <Typography>EXPERIENCE</Typography>

        </Box>
    </React.Fragment>
  );
};

export default AppLayout;
