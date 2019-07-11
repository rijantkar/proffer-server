const { user } = require('../models');

const userResolvers = {
    Query: {
        users() {
            return user.list()
        },
        findUser(parent, args){
            return user.find(args.id)
        }
    }
}

module.exports = {
    userResolvers
}
