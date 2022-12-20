import React from "react";
import useStyles from './styles'
import { Card, CardActions,CardContent, CardMedia, Button, Typography  } from "@material-ui/core";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from "@mui/icons-material/Delete" ;
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"; 
import moment from "moment";  




const Post = ({post}) => {

  const classes = useStyles(); 

    return (
    <Card className={classes.card}> 
      <CardMedia className={classes.media} image ={post.selectedFile} title={post.title}></CardMedia>
      <div className="{classes.overlay}">
        <Typography variant= "h6">{post.creator}</Typography>
        <Typography variant = "body2">{moment(post.createAt).fromNow()}</ Typography>
      </div >
      <div className="overlay2">
        <Button style={{color: 'white'}} size="small" onClick={() => {}}>
          <MoreHorizIcon fontsize="default"></MoreHorizIcon>
        </Button>
      </div>
      <div className={classes.details}> 
      <Typography variant = "body2" color="text secondary">{post.tags.map((tag) => `#${tag} `)}</ Typography>
      </div>
      <CardContent>
      <Typography className={classes.title} variant="5" gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{} }> 
         <ThumbUpIcon fontsize="small"></ThumbUpIcon>
         Like   {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=>{} }> 
         <DeleteIcon fontsize="small"></DeleteIcon>
         Delete 
        </Button>
      </CardActions>
    </Card>
      
    ); 
}

export default Post;  