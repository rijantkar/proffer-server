const { gql } = require('apollo-server');

const query = gql`
  type Query {
    projects: [Project]
    users: [User]
    bids: [Bid]
    findProject(id: ID!): Project
    findUserProjects(sellerId: ID!): [Project]
    findAllocatedProjects(bidderId: ID!): [Project]
    findUser(id: ID!): User
    findBid(id: ID!): Bid
  }
  
  type Mutation {
    postProject(name: String!, description: String!, ): Project
  }
`;

module.exports = {
    query
}
