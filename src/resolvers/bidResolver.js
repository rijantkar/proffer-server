const { bid } = require('../models');

const bidResolvers = {
    Query: {
        getBid(parent, args){
            return bid.getBid(args.id);
        },
        getBids() {
            return bid.getBids();
        },
        getProjectBids(parent, args){
            return bid.getProjectBids(args.projectId);
        },
        getUserBids(parent, args){
            return bid.getUserBids(args.userId);
        }
    },
    Mutation: {
        postBid(parents, args){
            return bid.postBid(args);
        },
        updateBid(parent, args){
            const id = args.id;
            delete args[id];
            return bid.updateBid(id, args);
        },
        deleteBid(parent, args){
            console.log('deleting ...'+args.id);
            return bid.deleteBid(args.id);
        }
    }
}

module.exports = {
    bidResolvers
}
