import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Navbar = () => {
  return (
    <React.Fragment>
        <AppBar sx={{ width:'100%'}}>
            <Toolbar sx={{ display:'flex', justifyContent:'space-around'}}>
                <Typography>Logo</Typography>
                <ButtonGroup variant='text'>
                    <Button>Home</Button>
                    <Button>About</Button>
                    <Button>Skills</Button>
                    <Button variant={'contained'} sx={{ textTransform:'none'}}>Download CV</Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar;