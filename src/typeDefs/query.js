const { gql } = require('apollo-server');

const query = gql`
  type Query {
    projects: [Project]
    users: [User]
    bids: [Bid]
  }
`;

module.exports = {
    query
}
