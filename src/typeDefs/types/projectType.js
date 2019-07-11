const { gql } = require('apollo-server');

const projectType = gql`
    type Project{
        id: ID!
        name: String!
        description: String!
        budget: Int
        budgetType: String
        skills: [String]
        bidderId: ID
        allocatedPrice: Float
        bidExpiry: String
        createdDateTime: String
        status: String
        sellerId: ID
    }
`;

module.exports = {
    projectType
}


