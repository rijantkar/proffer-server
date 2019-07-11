const { user } = require('../models');

const userResolvers = {
    Query: {
        getUser(parent, args){
            return user.getUser(args.id)
        },
        getUsers() {
            return user.getUsers()
        }
    }
}

module.exports = {
    userResolvers
}
