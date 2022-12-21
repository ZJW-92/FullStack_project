import React from "react";
import useStyles from './styles'
import { Card, CardActions,CardContent, CardMedia, Button, Typography  } from "@material-ui/core";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from "@mui/icons-material/Delete" ;
import EditIcon from '@mui/icons-material/Edit';
import moment from "moment";  
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';


const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();
  const classes = useStyles(); 

    return (
    <Card className={classes.card}> 
      <CardMedia className={classes.media} image ={post.selectedFile} title={post.title}></CardMedia>
      <div className={classes.overlay}>
          <Typography variant= "h6">{post.creator}</Typography>
          <Typography variant = "body2">{moment(post.createAt).fromNow()}</ Typography>
      </div >
      <div className={classes.overlay2}> 
      <Button style={{ color: 'blue' }} size="small" onClick={() => setCurrentId(post._id)}>
          <EditIcon fontsize="default"></EditIcon>
        </Button>
      </div>
      <div className={classes.details}> 
      <Typography variant = "body2" color="text secondary">{post.tags.map((tag) => `#${tag} `)}</ Typography>
      </div>
      <Typography className={classes.title} variant="5" gutterBottom>{post.title}</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>dispatch(likePost(post._id)) }> 
         <ThumbUpIcon fontsize="small"></ThumbUpIcon>
         Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id)) }> 
         <DeleteIcon fontsize="small"></DeleteIcon>
         Delete 
        </Button>
      </CardActions>
    </Card>
      
    ); 
}

export default Post;  