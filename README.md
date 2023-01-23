# ***[Full-stack MERN Project](https://memories-fullstackapp.netlify.app/)***

***This is a fullstack MERN application to take memories with message and hashtag. Users can edit, delete the memories and count thumb up times.***

[![Netlify Status](https://api.netlify.com/api/v1/badges/eb3979f2-63a6-432b-bd5c-6ba7b1982d23/deploy-status)](https://app.netlify.com/sites/memories-fullstackapp/deploys)



# ***Teck stack***
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) 
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## ***Setup***

### ***Client***

_Run `npm install && npm start`_

- _axios: make api requests_
- _moment: a library work with time and date_
- _react-file-base64: convert images for uploading_
- _redux: a predictable state container for JavaScript apps_
- _redux-thunk: asynchornous actions using redux_
- _@material-ui/core: install UI styling_
- _react-redux: official React UI bindings layer for redux_


### ***Server***

_Run `npm install && npm start`_

- _body-parser: enable to send post requests_
- _cors: enable cross origin requests_
- _express: framework for creating the routers_
- _mongoose: create models for posts_
- _nodemon: automatically restart the node application_


### ***Database***

- _connect with MongoDB with signing up `http://www.mongodb.com/cloud/atlas` in index.js/server and add follows:_
```
const CONNECTION_URL = 'here paste your connection string from mongodb'
const PORT = process.env.PORT || 5000; 
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(error.message)); 
```

