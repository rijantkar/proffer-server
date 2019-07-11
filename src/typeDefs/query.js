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
    postProject(name: String!, description: String!): Project
    postBid(bidQuote: Float!, bidderId: ID!, projectId: ID!): Bid
    updateBid(id: ID!, bidQuote: Float, bidderId: ID, projectId: ID): Bid
    deleteBid(id: ID!): Bid
  }
`;

module.exports = {
    query
}
