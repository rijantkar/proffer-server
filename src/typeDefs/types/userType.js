const { gql } = require('apollo-server');

const userType = gql`
    type User{
        userId: ID
        description: String
    }
`;

module.exports = {
    userType
}
