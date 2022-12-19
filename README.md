# FullStack_MERN_ project
This is a fullstack MERN application to take notes of memory.  

## Teck stack 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)


## Client setup

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

## Server setup

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
 
- connect with MongoDB with signing up `http://www.mongodb.com/cloud/atlas`
- run `npm start` to check if the server is running on port: 5000 successfully

## Directory tree

