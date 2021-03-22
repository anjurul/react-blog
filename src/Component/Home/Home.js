import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid } from '@material-ui/core';
import "./Home.css";
import { Blog } from '../Blog/Blog';
import fakeData from '../fakeData/db.json';

const useStyles = makeStyles((theme) => ({
    blogContainer: {
      display: "flex",
      paddingTop: theme.spacing(3)
    },
  }));


const Home = () => {

    const classes = useStyles();
    const first20 = fakeData.posts.slice(0,15);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        setBlogs(first20)
        
    }, [])

    return (
        <>
            <h1>Articles {blogs.length}</h1>

            <Container  maxWidth="lg" className={classes.blogContainer} >
                <Grid  container spacing={3}>
                {
                blogs.map(blog => <Blog blog={blog}></Blog>)
                } 
                </Grid>
            </Container>

        </>
    );
};

export { Home };