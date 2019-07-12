const { gql } = require('apollo-server');

const projectType = gql`
    type Project{
        id: ID!
        name: String
        description: String
        skills: String
        sellerId: ID
        bidderId: ID
        lowestBid: Float
        bidExpiryDateTime: String!
        createdDateTime: String
        status: String
    }
`;

module.exports = {
    projectType
}


