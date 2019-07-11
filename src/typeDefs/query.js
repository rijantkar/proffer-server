const { gql } = require('apollo-server');

const query = gql`
  type Query {
    getProject(id: ID!): Project
    getProjects: [Project]
    getUserProjects(sellerId: ID!): [Project]
    getBidderProjects(bidderId: ID!): [Project]
    searchText(searchTerm: String): [Project]
    getUser(id: ID!): User
    getUsers: [User]
    getBids: [Bid]
    getBid(id: ID!): Bid
    getProjectBids(projectId: ID!): [Bid]
    getUserBids(userId: ID): [Bid] 
  }
  
  type Mutation {
    postProject(name: String!, description: String!): Project
  }
`;

module.exports = {
    query
}
