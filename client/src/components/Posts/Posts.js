import React from "react";
import Post from "./Post/Post.js"
import useStyles from './styles'
import {useSelector} from 'react-redux'; 




const Posts = () => {
  
 const post = useSelector((state) => state.posts)

 const classes = useStyles(); 



  const posts = "to be added";
    return (
      <>
      <h1>{posts}</h1>
      <h1>{posts}</h1>
      </>
    ); 
}

export default Posts;   