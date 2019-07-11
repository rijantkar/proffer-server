const { gql } = require('apollo-server');

const bidType = gql`
    type Bid{
        id: ID!
        bidQuote: Float!
        bidderId: ID!
        projectId: ID!
        createdDateTime: String!
    }
`;

module.exports = {
    bidType
}
