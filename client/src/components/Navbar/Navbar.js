import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();

    return (

        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>

            </div>
            <Typography className={classes.heading} variant="h2" align="center">MERN Social Network</Typography>
        </AppBar>
    )
};

export default Navbar


//Minutoi 2.37.10 video youtube https://www.youtube.com/watch?v=VsUzmlZfYNg&t=871s