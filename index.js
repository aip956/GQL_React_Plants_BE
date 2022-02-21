require("dotenv").config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');


// Database connection
const { URL } = process.env;

mongoose.connect(
    URL,
    {
       useUnifiedTopology:true,
       useNewUrlParser:true, 
    },
    () => console.log("DB Connected")
);



// Server connection

const startServer=async()=>{
    const app=express()
    const apolloServer=new ApolloServer({
        typeDefs,resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app});
    app.listen(4000,()=>console.log("Server Up and Running on 4000"));
};
startServer();