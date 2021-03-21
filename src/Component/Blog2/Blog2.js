import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Card, Container, Grid, CardActionArea, CardMedia, CardContent, CardActions, Avatar, CardHeader, IconButton, Red} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';


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
    blogContainer: {
      paddingTop: theme.spacing(3)
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 240,
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
    author: {
      display: "flex",
    },
  
}));
  

  function Blog2() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <>
        <Container maxWidth="lg" className={classes.blogContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  
                  }
                  action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardActionArea>
  
                  
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.CardActions}>
                  <Box className={classes.author}>
                    <Typography  variant="subtitle2" component="p">
                      <FavoriteIcon />
                    </Typography>
                  </Box>
                  <Box>
                    <Typography  variant="subtitle2"  component="p"
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                    >
                        <CommentIcon></CommentIcon>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography  variant="subtitle2"  component="p">
                      <ShareIcon />
                    </Typography>
                  </Box>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                      minutes.
                  </Typography>
                  <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                      heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                      and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                      without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                      medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                      again without stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.CardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <Box ml={2}>
                      <Typography  variant="subtitle2" component="p">
                        Guy Clemons
                      </Typography>
                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                        March 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography  variant="subtitle2"  component="p">
                        <CommentIcon></CommentIcon>
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.CardActions}>
                  <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                    <Box ml={2}>
                      <Typography  variant="subtitle2" component="p">
                        Guy Clemons
                      </Typography>
                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                        March 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography  variant="subtitle2"  component="p">
                        <CommentIcon></CommentIcon>
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.CardActions}>
                  <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                    <Box ml={2}>
                      <Typography  variant="subtitle2" component="p">
                        Guy Clemons
                      </Typography>
                      <Typography  variant="subtitle2" color="textSecondary" component="p">
                        March 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography  variant="subtitle2"  component="p">
                        <CommentIcon></CommentIcon>
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
  
  export default Blog2;
