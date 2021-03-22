import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    AppBar: {
      backgroundColor: "#fff"
    },
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
      height: "400px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em"
      }
    },
    NavLink: {
      textDecoration: "none",
    }
    
}));

function Header() {
    const classes = useStyles();
    
    return (
        <>
           <AppBar className={classes.AppBar} position="static">
                <Toolbar>
                    <Typography variant="h6" color="primary">
                      <NavLink to="/blog"  className={classes.NavLink}>React Blog</NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box>React Blog</Box>
            </Box> 
        </>
    )
}

export default Header
