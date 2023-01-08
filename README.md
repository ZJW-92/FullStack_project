# FullStack_MERN_ project
This is a fullstack MERN application to take memories with message and hashtag. Users can edit, delete the memories and count thumb up times. 

## Demo 👉 [Full-stack MERN Project](https://memories-fullstackapp.netlify.app/)


[![Netlify Status](https://api.netlify.com/api/v1/badges/eb3979f2-63a6-432b-bd5c-6ba7b1982d23/deploy-status)](https://app.netlify.com/sites/memories-fullstackapp/deploys)



# Teck stack 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## Part 1:  Skeleton for client, server, database and routes setup, 

- [Client](#client)
- [Server](#server)
- [Database](#database)
- [Routes](#routes)

## Part 2: Implement card for client, logic (post, edit, delete and count thunmb up button) for backend



================================================================================================
### Client

- make sure to install node then run `npx create-react-app ./` in the client directory
- install necessary dependencies for the client:  

`npm install axios moment react-file-base64 redux redux-thunk`

`npm install -f @material-ui/core`

`yarn add react-redux`

```
axios: make api requests
moment: a library work with time and date
react-file-base64: convert images for uploading
redux: a predictable state container for JavaScript apps.
redux-thunk: asynchornous actions using redux 
@material-ui/core: install UI styling
react-redux: official React UI bindings layer for redux
```
- import all dependencies in the index.js/src/client as follows: 
``` 
import React from  'react';
import ReactDOM  from 'react-dom';
import App from './App' ; 
ReactDOM.render(<APP />, document.getElementById(('root'));  
```
- import dependencies in the App.js/src/client
```
import React from "react";
const App = () => {return (
<div> <h1>hello world</h1></div>
)}
export default App;  
```
- run `npm start` to start the client to see "hello world" successfully
### Server

- run `npm init -y` to initialize empty package of json in order to install necessary dependencies
- Dependencies are : 

` npm install body-parser cors express mongoose nodemon`
```
body-parser: enable to send post requests
cors: enable cross origin requests 
express: framework for creating the routers
mongoose: create models for posts
nodemon: automatically restart the node application 
```
- After all dependencies are installed, import all dependencies in the index.js/server, add `"type": "module"` below the main in the package.json/server, delete "tests" and add `"start": "nodemon index.js"`in the scripts part in package.json/server
 
- To initialize the app, in index.js/server adding 
```
const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true})); 
app.use(bodyParser.urlencoded({limit:"30mb", extended: true})); 
app.use(cors()); 
```

### Database

- connect with MongoDB with signing up `http://www.mongodb.com/cloud/atlas` in index.js/server and add follows:
```
const CONNECTION_URL = 'here paste your connection string from mongodb'
const PORT = process.env.PORT || 5000; 
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(error.message)); 
```
- run `npm start` to check if the server is running on port: 5000 successfully in the console 

### Routes
- create files and folders called: `posts.js/routes/server` and `posts.js/controllers/server`
- add all the routes that work with posts in posts.js/routes and posts.js/controllers : 
```
import express from 'express';
import { getPosts } from '../controllers/posts.js';
const router = express.Router(); 
router.get('/',getPosts );
export default router; 
```
```
export const getPosts= (req, res)=> {res.send('It works')}
```
- import router in the index.js adding `import postRoutes from './routes/posts.js'` and use express middleware `app.use('/posts', postRoutes)` to connect routes with app 
- check if router works in the `localhost:5000/posts`

- create file and folder called: `postMessage.js/models/server` to utilize mongoose
```
import mongoose from "mongoose";
const postSchema = mongoose.Schema ({
   title: String,
   message: String,
   creator: String,
   tags: [String],
   selectedFile: String,
   likeCount: {
     type: Number,
     default: 0
   }, 
   createdAt:{
      type: Date,
      default: new Date()
   },

}); 
const postMessage = mongoose.model('postMessage', postSchema);
export default  postMessage; 
``` 
- add createPost in posts.js/routes and posts.js/controllers and import postMessage from models
```
import { getPosts,createPost } from '../controllers/posts.js';
router.post('/', createPost );
```
```
import postMessage from "../models/postMessage.js";
export const createPost = (req, res) => {
res.send('Post creation'); 
}
```

- add try catch block to getPosts and createPosts in posts.js/controllers to have access to real models 
```
export const getPosts = async(req, res) => {
  try {
    const postMessage = await postMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({message: error.message}); 
  }
  
export const createPost = async (req, res) => {
   const post = req.body; 
   const newPost = new postMessage(post);
   try{
    await newPost.save(); 
    res.status(201).json(newPost);  
   } catch(error){
    res.status(409).json({message: error.message}); 
   }
```
- go back to client to implement logic for sending and creating posts 



