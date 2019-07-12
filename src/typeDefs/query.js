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
    getBid(id: ID!): Bid
    getBids: [Bid]
    getProjectBids(projectId: ID!): [Bid]
    getUserBids(userId: ID): [Bid] 
  }
  
  type Mutation {
    postProject(name: String!, description: String!, skills: String, sellerId: ID!, bidExpiryDateTime: String!): Project
    updateProject(id: ID!, name: String, description: String, skills: String, bidExpiryDateTime: String): Project
    deleteProject(id: ID!): Project
    postUser(name: String!, description: String, email: String!, contact: String!, bankName: String, bankAccount: Int, bankBSB: Int): User
    updateUser(id: ID!, name: String, description: String, email: String, contact: String, bankName: String, bankAccount: Int, bankBSB: Int): User
    deleteUser(id: ID!): User
    postBid(bidQuote: Float!, bidderId: ID!, projectId: ID!): Bid
    updateBid(id: ID!, bidQuote: Float, bidderId: ID, projectId: ID): Bid
  }
`;

module.exports = {
    query
}
