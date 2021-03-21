import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { Card, Container, Grid, CardHeader, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    blogContainer: {
      paddingTop: theme.spacing(10)
      
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
      maxWidth: "100%",
    },
    cardHeader:{
        display: "flex",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    CardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between",
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

function Comment(props) {

    const classes = useStyles();
    // const {id, name, email, avatar, body,  publishDate} = props.comment
    
    return (
        <div>
            <Container maxWidth="lg" className={classes.blogContainer}>
                <Typography title variant="h3" component="h2">
                    Comments
                </Typography>
                <Grid container spacing={3}>
                    <Grid  item  md={12}>      
                        <Card className={classes.card}>
                            <CardHeader
                                    
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}
                                    src={comments.avatar} />
                                
                                }
                                
                                title={comments.name}
                                subheader={comments.publishDate}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h4">
                                    {comments.email}
                                </Typography>
                                <Typography paragraph color="textSecondary" component="p">
                                    {comments.body}
                                </Typography>
                                
                            </CardContent>
                        </Card>    
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Comment
