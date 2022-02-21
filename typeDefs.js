const { gql } = require('apollo-server-express');

// Queries
const typeDefs=gql`
type Plant{
    id:ID
    name:String
    type:String
    image:String
}

type Query{
    hello:String
    getAll:[Plant]
    }

input PlantInput{
    name:String
    type:String
    image:String
    }

type Mutation{
    createPlant(plant:PlantInput):Plant
    updatePlant(id:String,plant:PlantInput):Plant
    deletePlant(id:String):String
}
`;

module.exports=typeDefs;