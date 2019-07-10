const { user } = require('../models');

const userResolvers = {
    Query: {
        users() {
            return user.list()
        }
    }
}

module.exports = {
    userResolvers
}
