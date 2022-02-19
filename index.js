require("dotenv").config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { gql } = require('apollo-server-express');

const { URL } = process.env;

// Database connection
mongoose.connect(
    URL,
    {
       useUnifiedTopology:true,
       useNewUrlParser:true, 
    },
    () => console.log("DB COnnected")
);

// Queries
const typeDefs=gql`
type Query{
    hello:String
}
`

// Resolvers
const resolvers={
    Query:{
        hello:()=>{
            return "Hello World";
        },
    },
};

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