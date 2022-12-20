import React , {useEffect }from "react";
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core' ; 

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'; 
import {useDispatch} from 'react-redux'; 
import { getPosts } from "./actions/posts";
import memories from './images/memories.png'
import useStyles from './styles'


const App = () => {

   
    
    // here is blank error 
    const dispatch = useDispatch(); 
    const classes = useStyles(); 

    useEffect (() => {
        dispatch(getPosts()); 
    }, [dispatch])


    return (
         <Container maxWidth="lg">
          <AppBar className = {classes.appBar} position= "static" color="inherit">
               <Typography className= {classes.heading}variant="h3" align= "center">Memories </Typography>
               <img className= {classes.image} src={memories} alt ="memories" height="60"/>
          </AppBar>
          <Grow in ><Container>
               <Grid container justify="space-between"  
               alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    
                      <Posts></Posts>
                    </Grid>
                    <Grid item xs={12} sm={4}>
              
                      <Form></Form>
                      </Grid>
               </Grid>
               </Container></Grow>
         </Container>
         
     ) 
}

export default App;