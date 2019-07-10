const { gql } = require('apollo-server');

const bidType = gql`
    type Bid{
        id: ID!
        bidQuote: Int
    }
`;

module.exports = {
    bidType
}
