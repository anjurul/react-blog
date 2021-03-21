import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Grid, } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import { findByLabelText } from '@testing-library/dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    blogContainer: {
      paddingTop: theme.spacing(2)
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

  

function SinglePost(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
  
    const {id, author, image, avatar, urlToImage, title, description, content, publishDate, likes} = props.blog
    return (
        <div>
            <Container maxWidth="lg" className={classes.blogContainer}>
               <Grid   container spacing={3}>
                   <Grid  item  md={12}>
                        <Card className={classes.card}>
                            
                            <CardMedia
                                className={classes.media}
                                image={urlToImage}
                                title="Contemplative Reptile"
                            />
                            <CardHeader
                                
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}
                                    src={avatar} />
                                
                                }
                                
                                title={author}
                                subheader={publishDate}

                                action={
                                    <IconButton aria-label="settings">
                                      <MoreVertIcon />
                                    </IconButton>
                                  }
                            />

                            <CardActions disableSpacing className={CardActions} >
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    {likes}
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton 
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <CommentIcon/>
                                </IconButton>
                            </CardActions>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h2" component="h2">
                                    {title}
                                </Typography>
                                <Typography paragraph color="textSecondary" component="p">
                                {description}
                                </Typography>
                                <Typography paragraph color="textSecondary" component="p">
                                {content}
                                </Typography>
                            </CardContent>
                            
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Comments></Comments>
                                    
                                </CardContent>
                            </Collapse>
                        </Card>
                   </Grid>
               </Grid>
           </Container>
        </div>
    )
}

export default SinglePost
