import React from "react";
import { Grid, CircularProgress } from "@material-ui/core" ;
import Post from "./Post/Post.js"
import useStyles from './styles'
import {useSelector} from 'react-redux'; 


const Posts = ({setCurrentId}) => {
 const posts = useSelector((state) => state.posts)
 const classes = useStyles(); 

    return (
      !posts.length ? <CircularProgress color ="secondary" /> : 
      ( <Grid className= {classes.container} container alignItem= "stretch" spacing={3}>
         {  posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post ={post} setCurrentId= {setCurrentId}></Post>
          </Grid>
         ))}
        </Grid>
      )
    ); 
}

export default Posts;   