const { gql } = require('apollo-server-express');

// Queries
const typeDefs=gql`
type Query{
    hello:String
}
`;

module.exports=typeDefs