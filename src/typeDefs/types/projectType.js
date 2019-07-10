const { gql } = require('apollo-server');

const projectType = gql`
    type Project{
        projectId: ID!
        name: String!
        description: String!
    }
`;

module.exports = {
    projectType
}

/*
*
* budget: Int
        budgetType: String
        skills: String
        allocatedTo: User
        allocatedPrice: Float
        bidExpiry: String
        createdDateTime: String
        status: String
* */


