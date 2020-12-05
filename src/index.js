import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose"
import express from 'express'; 
import server from './server';

const createServer = async () => {
  try{
      await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qi5hu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, {useUnifiedTopology: true});

    const app = express()

    const PORT = 9000
    
    server.applyMiddleware({ app });
    
    app.listen({ port: PORT}, () =>
      console.log(`🚀 Server ready at http://localhost:9000${server.graphqlPath}`)
    );
  }catch(error){
    console.log(errorr)
  }
};

createServer();

