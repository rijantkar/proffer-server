const { user } = require('../models');

const userResolvers = {
    Query: {
        getUser(parent, args){
            return user.getUser(args.id);
        },
        getUsers() {
            return user.getUsers();
        }
    },
    Mutation: {
        postUser(parents, args){
            return user.postUser(args);
        },
        updateUser(parent, args){
            const id = args.id;
            delete args[id];
            return user.updateUser(id, args);
        },
        deleteUser(parent, args){
            return user.deleteUser(args.id);
        }
    }
}

module.exports = {
    userResolvers
}
