const { gql } = require('apollo-server');

const userType = gql`
    type User{
        id: ID
        description: String
    }
`;

module.exports = {
    userType
}
