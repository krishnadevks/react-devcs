import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>My App</Typography>&nbsp;
                <Button variant='contained' color='success'>
                    <Link to={'/'} style={{textDecoration:"none",color:"white"}}>View Data</Link>
                    </Button>&nbsp;
                <Button variant='contained' color='error'>
                <Link to={'/add'} style={{textDecoration:"none",color:"white"}}>Add Data</Link>
                </Button>&nbsp;
                <Button variant='contained' color='success'>
                    <Link to={'/ed'} style={{textDecoration:"none",color:"white"}}>History</Link>
                </Button>&nbsp;
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
