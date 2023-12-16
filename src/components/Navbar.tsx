import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material';
import React from 'react'
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  return (
    <React.Fragment>
        <AppBar sx={{ width:'100%'}}>
            <Toolbar sx={{ display:'flex', justifyContent:'space-around'}}>
                <FaCode size={30} />
                <ButtonGroup variant='outlined'>
                    <Button sx={{ fontWeight:'bold'}} >Home</Button>
                    <Button sx={{ fontWeight:'bold'}} >About</Button>
                    <Button sx={{ fontWeight:'bold'}} >Skills</Button>
                    <Button sx={{ fontWeight:'bold'}} color='secondary'>Contact me</Button>
                    <Button variant={'contained'} sx={{ textTransform:'none'}} disabled>Download CV</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar;