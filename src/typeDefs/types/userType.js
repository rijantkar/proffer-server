const { gql } = require('apollo-server');

const userType = gql`
    type User{
        id: ID!
        name: String
        description: String
        email: String
        contact: String
        bankName: String
        bankAccount: Int
        bankBSB: Int
        createdDateTime: String
    }
`;

module.exports = {
    userType
}
