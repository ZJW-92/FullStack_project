import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express() ; 


app.use (bodyParser.json({limit: "30mb", extended: true}));
app.use (bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());  
app.use('/posts', postRoutes) ; 


<<<<<<< HEAD
const CONNECTION_URL = 'mongodb+srv://zhijie:wzj2018miracle@cluster0.bridd5e.mongodb.net/test?retryWrites=true&w=majority'
=======
const CONNECTION_URL = "mongodb+srv://zhijie:wzj2018miracle@cluster0.bridd5e.mongodb.net/test?retryWrites=true&w=majority"
>>>>>>> 75281c3e9c38abd02c7341604b6aa2c22083b522
const PORT = process.env.PORT || 5000; 
mongoose.connect(CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology : true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(error.message)); 

//mongoose.set('useFindAndModify', false);


// http://www.mongodb.com/cloud/atlas
