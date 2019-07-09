const express = require('express');
const schema = require('./schema');
const graphqlHTTP = require('express-graphql');

const server = express();
server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));
server.listen(4000);
console.log('Running a GraphQL API index at localhost:4000/graphql');
